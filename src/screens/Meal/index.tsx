import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import {
  Container,
  Footer,
  MealConteiner,
  Status,
  SubTitle,
  Tag,
  TagTitle,
  Text,
  Title,
} from './styles';

import { useFocusEffect } from '@react-navigation/native';
import * as Icon from 'phosphor-react-native';
import { format } from 'date-fns';

import { MealProps } from '@components/MealListItem';
import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { THEME } from '@themes/theme';

import { DATABASE_MEALS, storageMeals } from '@databases/database';

export function Meal({ route, navigation }) {
  const [meal, setMeal] = useState<MealProps>({} as MealProps);
  const id = route.params?.id;

  function fetchMeal() {
    const jsonMeals = storageMeals.getString(`${DATABASE_MEALS}`);
    if (jsonMeals) {
      const meals = JSON.parse(jsonMeals);
      const mealSelected = meals.find(
        (element: MealProps) => element.id === id
      );

      setMeal(mealSelected);
    }
  }

  function handleEditMeal(id: string) {
    navigation.navigate('Registrar Refeição', { id });
  }

  function handleDeleteMeal(id: string) {
    const jsonMeals = storageMeals.getString(`${DATABASE_MEALS}`);
    if (jsonMeals) {
      const meals = JSON.parse(jsonMeals);
      const mealsFiltered = meals.filter((meal: MealProps) => meal.id != id);
      storageMeals.set(`${DATABASE_MEALS}`, JSON.stringify(mealsFiltered));

      navigation.goBack();
    }
  }

  function handleClickDeleteMeal() {
    Alert.alert('Deseja realmente excluir o registro da refeição?', undefined, [
      { text: 'Cancelar' },
      { text: 'Sim, excluir', onPress: () => handleDeleteMeal(id) },
    ]);
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeal();
    }, [])
  );

  return (
    <Container>
      <Header
        type={
          meal.mealIsInTheDiet ? 'secondary_positive' : 'secondary_negative'
        }
        title='Refeição'
      />

      <MealConteiner>
        <Title>{meal.name}</Title>
        <Text>{meal.description}</Text>

        <SubTitle>Data e hora</SubTitle>
        <Text>
          {meal.date
            ? `${format(new Date(meal.date), 'dd/MM/yyyy')} às ${format(
                new Date(meal.time),
                "H':'mm"
              )}`
            : ''}
        </Text>

        <Tag>
          <Status type={meal.mealIsInTheDiet} />
          <TagTitle>
            {meal.mealIsInTheDiet ? 'dentro da dieta' : 'fora da dieta'}
          </TagTitle>
        </Tag>
      </MealConteiner>

      <Footer>
        <Button
          icon={<Icon.PencilSimple size={18} color={THEME.COLORS.WHITE} />}
          title='Editar refeição'
          onPress={() => handleEditMeal(id)}
        />

        <Button
          icon={<Icon.Trash size={18} />}
          type='secondary'
          title='Excluir refeição'
          onPress={handleClickDeleteMeal}
        />
      </Footer>
    </Container>
  );
}
