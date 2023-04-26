import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import {
  Container,
  Header,
  BackButton,
  Percent,
  Description,
  Body,
  Title,
  StatisticsRow,
  StatisticsCardGroup,
  TitleContainer,
  ArrowLeftIcon,
} from './styles';

import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { StatisticCard } from '@components/StatisticCard';
import { MealProps } from '@components/MealListItem';

import { DATABASE_MEALS, storageMeals } from '@databases/database';

import { THEME } from '@themes/theme';

export function Statistics() {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);
  const [meals, setMeals] = useState([]);
  const [percentMealsInTheDiet, setPercentMealsInTheDiet] = useState('0');
  const [maxConsecutiveMealsInDiet, setMaxConsecutiveMealsInDiet] = useState(0);

  function fetchMeals() {
    setIsLoading(true);

    try {
      const jsonMeals = storageMeals.getString(`${DATABASE_MEALS}`);
      if (jsonMeals) {
        const meals = JSON.parse(jsonMeals);

        let sumMealsInTheDiet = 0;
        let currentConsecutiveMeals = 0;
        let maxConsecutiveMeals = 0;
        meals.forEach((meal: MealProps) => {
          // Calc percent of meals in the diet
          if (meal.mealIsInTheDiet) {
            sumMealsInTheDiet += 1;
          }
          const percent = `${((sumMealsInTheDiet / meals.length) * 100).toFixed(
            2
          )}`;
          setPercentMealsInTheDiet(percent);

          // Calc Max Consecutive Meals
          if (meal.mealIsInTheDiet) {
            currentConsecutiveMeals++;
          } else {
            maxConsecutiveMeals = Math.max(
              maxConsecutiveMeals,
              currentConsecutiveMeals
            );
            currentConsecutiveMeals = 0;
          }

          const consecutiveMeals = Math.max(
            maxConsecutiveMeals,
            currentConsecutiveMeals
          );

          setMaxConsecutiveMealsInDiet(consecutiveMeals);
        });

        setMeals(meals);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Refeições', 'Não foi possível buscar as refeições.');
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <Container>
      <Header
        type={Number(percentMealsInTheDiet) >= 50 ? 'positive' : 'negative'}
      >
        <BackButton onPress={() => navigation.goBack()}>
          <ArrowLeftIcon
            type={Number(percentMealsInTheDiet) >= 50 ? 'positive' : 'negative'}
            color={
              Number(percentMealsInTheDiet) >= 50
                ? THEME.COLORS.GREEN_DARK
                : THEME.COLORS.RED_DARK
            }
          />
        </BackButton>

        <Percent>{`${percentMealsInTheDiet}%`}</Percent>
        <Description>das refeições dentro da dieta</Description>
      </Header>

      <Body>
        <TitleContainer>
          <Title>Estatísticas gerais</Title>
        </TitleContainer>

        <StatisticCard
          count={maxConsecutiveMealsInDiet}
          description='melhor sequência de pratos dentro da dieta'
          type='neutral'
        />

        <StatisticCard
          count={meals.length}
          description='refeições registradas'
          type='neutral'
        />

        <StatisticsRow>
          <StatisticsCardGroup>
            <StatisticCard
              count={(
                (Number(percentMealsInTheDiet) / 100) *
                meals.length
              ).toFixed(0)}
              description='refeições dentro da dieta'
              type='positive'
            />
          </StatisticsCardGroup>

          <StatisticsCardGroup>
            <StatisticCard
              count={(
                meals.length -
                (Number(percentMealsInTheDiet) / 100) * meals.length
              ).toFixed(0)}
              description='refeições fora da dieta'
              type='negative'
            />
          </StatisticsCardGroup>
        </StatisticsRow>
      </Body>
    </Container>
  );
}
