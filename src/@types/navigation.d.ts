export type MealNavigationProps = {
  id: string;
};

export type RegisterMealNavigationProps = {
  id?: string;
};

type RootParamList = {
  Home: undefined;
  Estatísticas: undefined;
  'Registrar Refeição': RegisterMealNavigationProps;
  Refeição: MealNavigationProps;
};
