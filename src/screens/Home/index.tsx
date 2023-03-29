import React from 'react';
import { SectionList } from 'react-native';
import {
  Container,
  Header,
  ContainerProfileImage,
  ProfileImage,
  MealsContainer,
  Title,
  SectionHeader,
} from './styles';

import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Plus } from 'phosphor-react-native';

import { MealListItem } from '@components/MealListItem';
import { Percent } from '@components/Percent';
import { Button } from '@components/Button';

import Logo from '@assets/Logo.svg';

import { THEME } from '@themes/theme';

import { MEALS } from '../../data/meals';

export function Home() {
  return (
    <Container>
      <Header>
        <Logo width={82} height={37} />

        <ContainerProfileImage>
          <ProfileImage source={{ uri: '@assets/VaP.png' }} />
        </ContainerProfileImage>
      </Header>

      <Percent type='primary' />

      <Title>Refeições</Title>
      <Button
        type='primary'
        icon={<Plus size={18} color={THEME.COLORS.WHITE} />}
        title='Nova Refeição'
      />

      <MealsContainer>
        <SectionList
          sections={MEALS}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <MealListItem data={item} />}
          renderSectionHeader={({ section }) => (
            <SectionHeader>{section.title}</SectionHeader>
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
