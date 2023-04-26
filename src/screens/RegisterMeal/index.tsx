import React, { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import {
  Container,
  Footer,
  Form,
  DateTimeInputGroup,
  InputRow,
  MealTypeButtonGroup,
  DateTimeButton,
  DateTimeButtonText,
  Label,
} from './styles';

import DateTimePicker from '@react-native-community/datetimepicker';
import { useFocusEffect } from '@react-navigation/native';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { ptBR } from 'date-fns/locale';
import uuid from 'react-native-uuid';
import { format } from 'date-fns';
import * as Yup from 'yup';

import { ControlledInput } from '@components/Form/ControlledInput';
import { MealTypeButton } from '@components/Form/MealTypeButton';
import { MealProps } from '@components/MealListItem';
import { Header } from '@components/Header';
import { Button } from '@components/Button';

import { DATABASE_MEALS, storageMeals } from '@databases/database';

type FormData = {
  name: string;
  description: string;
  date: string;
  time: string;
  mealIsInTheDiet: boolean;
};

const schema = Yup.object({
  name: Yup.string().required('Insira o nome da refeição'),
  description: Yup.string().required('Insira a descrição da refeição'),
  date: Yup.string(),
  time: Yup.string(),
});

export function RegisterMeal({ route, navigation }) {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  // Set and formtat Date
  const [date, setDate] = useState(new Date());
  const formattedDate = format(date, "dd'/'MM'/'yyyy", {
    locale: ptBR,
  });
  const [showDatePicker, setShowDatePicker] = useState(false);
  const onChangeDate = (_, selectedDate) => {
    setShowDatePicker(false);
    setDate(selectedDate);
  };
  // Set and formtat Time
  const [time, setTime] = useState(new Date());
  const formattedTime = format(time, "H':'mm");
  const [showTimePicker, setShowTimePicker] = useState(false);
  const onChangeTime = (_, selectedTime) => {
    setShowTimePicker(false);
    setTime(selectedTime);
  };

  const [mealIsInTheDiet, setMealIsInTheDiet] = useState(null);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });
  const [isLoading, setIsLoading] = useState(false);
  const id = route.params?.id;

  function handleSelectMealType(type: boolean) {
    setMealIsInTheDiet(type);
  }

  function fetchMeal() {
    const jsonMeals = storageMeals.getString(`${DATABASE_MEALS}`);
    if (jsonMeals) {
      const meals = JSON.parse(jsonMeals);
      const mealSelected = meals.find(
        (element: MealProps) => element.id === id
      );

      setName(mealSelected.name);
      setDescription(mealSelected.description);
      setDate(new Date(mealSelected.date));
      setTime(new Date(mealSelected.time));
      setMealIsInTheDiet(mealSelected.mealIsInTheDiet);
    }
  }

  function handleEditMeal(form: FormData) {
    try {
      const jsonMeals = storageMeals.getString(`${DATABASE_MEALS}`);
      if (jsonMeals) {
        const meals = JSON.parse(jsonMeals);
        const mealsFiltered = meals.filter((meal: MealProps) => meal.id != id);

        const editedMeal = {
          id,
          name: form.name,
          description: form.description,
          date: date,
          time: time,
          mealIsInTheDiet: mealIsInTheDiet,
        };

        storageMeals.set(
          `${DATABASE_MEALS}`,
          JSON.stringify([...mealsFiltered, editedMeal])
        );

        Alert.alert('Edição de refeição', 'Refeição editada com sucesso!');
        reset();

        navigation.goBack();
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Edição de refeição', `${error.message}`);
    }
  }

  function handleRegisterMeal(form: FormData) {
    setIsLoading(true);

    /* Validation Form */
    if (mealIsInTheDiet === null) {
      return Alert.alert(
        'Cadastro de refeição',
        'Informe se a refeição está dentro da dieta!'
      );
    }
    /* Validation Form */

    // Edit Meal
    if (id) {
      handleEditMeal(form);
    }
    // Add Meal
    else {
      try {
        const newMeal = {
          id: uuid.v4(),
          name: form.name,
          description: form.description,
          date: date,
          time: time,
          mealIsInTheDiet: mealIsInTheDiet,
        };

        const prevMeals = storageMeals.getString(`${DATABASE_MEALS}`);
        const meals = prevMeals ? JSON.parse(prevMeals) : [];
        storageMeals.set(
          `${DATABASE_MEALS}`,
          JSON.stringify([...meals, newMeal])
        );

        Alert.alert('Cadastro de refeição', 'Refeição cadastrada com sucesso!');
        reset();
      } catch (error) {
        console.error(error);
        Alert.alert('Cadastro de refeição', `${error.message}`);
      } finally {
        setIsLoading(false);
      }
    }
  }

  useFocusEffect(
    useCallback(() => {
      if (id) {
        fetchMeal();
      }
    }, [])
  );

  return (
    <Container>
      <Header type='primary' title={id ? 'Editar Refeição' : 'Nova Refeição'} />

      <Form>
        <ControlledInput
          label='Nome'
          defaultValue={name}
          name='name'
          control={control}
          error={errors.name}
        />

        <ControlledInput
          label='Descrição'
          textAlignVertical='top'
          multiline
          numberOfLines={5}
          defaultValue={description}
          name='description'
          control={control}
          error={errors.description}
          style={{
            paddingTop: 16,
          }}
        />

        <InputRow>
          <DateTimeInputGroup>
            <Label>Data</Label>
            <DateTimeButton onPress={() => setShowDatePicker(true)}>
              <DateTimeButtonText>{formattedDate}</DateTimeButtonText>
            </DateTimeButton>
            {showDatePicker && (
              <DateTimePicker
                testID='dateTimePicker'
                value={date}
                mode='date'
                onChange={onChangeDate}
              />
            )}
          </DateTimeInputGroup>

          <DateTimeInputGroup>
            <Label>Hora</Label>
            <DateTimeButton onPress={() => setShowTimePicker(true)}>
              <DateTimeButtonText>{formattedTime}</DateTimeButtonText>
            </DateTimeButton>
            {showTimePicker && (
              <DateTimePicker
                testID='dateTimePicker'
                value={time}
                mode='time'
                onChange={onChangeTime}
              />
            )}
          </DateTimeInputGroup>
        </InputRow>

        <Label>Está dentro da dieta?</Label>
        <InputRow>
          <MealTypeButtonGroup>
            <MealTypeButton
              title='Sim'
              mealIsInTheDiet={true}
              isActive={mealIsInTheDiet}
              onPress={() => handleSelectMealType(true)}
            />
          </MealTypeButtonGroup>

          <MealTypeButtonGroup>
            <MealTypeButton
              title='Não'
              mealIsInTheDiet={false}
              isActive={mealIsInTheDiet === false}
              onPress={() => handleSelectMealType(false)}
            />
          </MealTypeButtonGroup>
        </InputRow>
      </Form>

      <Footer>
        <Button
          title={id ? 'Salvar alterações' : 'Cadastrar refeição'}
          onPress={handleSubmit(handleRegisterMeal)}
        />
      </Footer>
    </Container>
  );
}
