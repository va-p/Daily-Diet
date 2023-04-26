import React, { useCallback, useState } from 'react';
import { Alert, SectionList } from 'react-native';
import {
  Container,
  Header,
  ContainerProfileImage,
  ProfileImage,
  MealsContainer,
  Title,
  SectionHeader,
  ListEmptyComponent,
} from './styles';

import { getBottomSpace } from 'react-native-iphone-x-helper';
import { useFocusEffect } from '@react-navigation/native';
import { Plus } from 'phosphor-react-native';
import { format, parse } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { MealListItem, MealProps } from '@components/MealListItem';
import { PercentCard } from '@components/PercentCard';
import { Button } from '@components/Button';

import Logo from '@assets/Logo.svg';

import { DATABASE_MEALS, storageMeals } from '@databases/database';

import { THEME } from '@themes/theme';

export function Home({ navigation }: any) {
  const [isLoading, setIsLoading] = useState(false);
  const [meals, setMeals] = useState([]);
  const [percentMealsInTheDiet, setPercentMealsInTheDiet] = useState('0');

  function fetchMeals() {
    setIsLoading(true);

    try {
      const jsonMeals = storageMeals.getString(`${DATABASE_MEALS}`);
      if (jsonMeals) {
        const meals = JSON.parse(jsonMeals);

        let mealsFormatted = [];
        for (const item of meals) {
          // Format the Date
          const dmy = format(new Date(item.date), 'dd.MM.yyyy', {
            locale: ptBR,
          });

          // Format the time
          const time = format(new Date(item.time), "H':'mm");

          // Created objects
          if (!mealsFormatted.hasOwnProperty(dmy)) {
            mealsFormatted[item.id] = {
              id: item.id,
              name: item.name,
              description: item.description,
              date: dmy,
              time: time,
              mealIsInTheDiet: item.mealIsInTheDiet,
            };
          }
        }
        mealsFormatted = Object.values(mealsFormatted).sort(
          (a: any, b: any) => {
            const firstDateParsed = parse(a.date, 'dd.MM.yyyy', new Date());
            const secondDateParsed = parse(b.date, 'dd.MM.yyyy', new Date());
            return secondDateParsed.getTime() - firstDateParsed.getTime();
          }
        );
        mealsFormatted.sort((a: any, b: any) => {
          const firstTimeParsed = parse(a.time, "H':'mm", new Date());
          const secondTimeParsed = parse(b.time, "H':'mm", new Date());
          return secondTimeParsed.getTime() - firstTimeParsed.getTime();
        });

        // Calc percent of meals in the diet
        let sumMealsInTheDiet = 0;
        mealsFormatted.forEach((meal: MealProps) => {
          if (meal.mealIsInTheDiet) {
            sumMealsInTheDiet += 1;
          }

          const percent = `${(
            (sumMealsInTheDiet / mealsFormatted.length) *
            100
          ).toFixed(2)}`;

          setPercentMealsInTheDiet(percent);
        });

        // Group transactions by date to section list
        const mealsGroupedByDate = mealsFormatted.reduce((acc, cur) => {
          const existObject = acc.find((element) => element.title === cur.date);

          if (!existObject) {
            acc.push({
              title: cur.date,
              data: [cur],
            });
          } else {
            existObject.data.push(cur);
          }

          return acc;
        }, []);

        setMeals(mealsGroupedByDate);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Refeições', 'Não foi possível buscar as refeições.');
    } finally {
      setIsLoading(false);
    }
  }

  function handleOpenMeal(id: string) {
    navigation.navigate('Refeição', { id });
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <Container>
      <Header>
        <Logo width={82} height={37} />

        <ContainerProfileImage></ContainerProfileImage>
      </Header>

      <PercentCard
        type={Number(percentMealsInTheDiet) >= 50 ? 'positive' : 'negative'}
        percent={`${percentMealsInTheDiet}%`}
        onPress={() => navigation.navigate('Estatísticas')}
      />

      <Title>Refeições</Title>
      <Button
        type='primary'
        icon={<Plus size={18} color={THEME.COLORS.WHITE} />}
        title='Nova Refeição'
        onPress={() => navigation.navigate('Registrar Refeição')}
      />

      <MealsContainer>
        <SectionList
          sections={meals}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <MealListItem data={item} onPress={() => handleOpenMeal(item.id)} />
          )}
          renderSectionHeader={({ section }) => (
            <SectionHeader>{section.title}</SectionHeader>
          )}
          ListEmptyComponent={() => (
            <ListEmptyComponent>
              Nenhuma refeição cadastrada ainda. Cadastre refeições para
              visualizá-las aqui.
            </ListEmptyComponent>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace(),
          }}
        />
      </MealsContainer>
    </Container>
  );
}
