import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootParamList } from 'src/@types/navigation';

import { RegisterMeal } from '@screens/RegisterMeal';
import { Statistics } from '@screens/Statistics';
import { Home } from '@screens/Home';
import { Meal } from '@screens/Meal';

const { Navigator, Screen } = createNativeStackNavigator<RootParamList>();

export function AppStackRoutes() {
  return (
    <Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name='Home' component={Home} />

      <Screen name='Estatísticas' component={Statistics} />

      <Screen name='Registrar Refeição' component={RegisterMeal} />

      <Screen name='Refeição' component={Meal} />
    </Navigator>
  );
}
