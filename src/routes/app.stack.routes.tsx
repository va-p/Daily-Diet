import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RegisterMeal } from '@screens/RegisterMeal';
import { Statistics } from '@screens/Statistics';
import { Home } from '@screens/Home';

const { Navigator, Screen } = createNativeStackNavigator();

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
    </Navigator>
  );
}
