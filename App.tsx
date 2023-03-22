import React from 'react';
import { StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components';

import { Routes } from '@routes/index';

import { THEME } from './src/global/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={THEME}>
      <StatusBar barStyle='light-content' />
      <Routes />
    </ThemeProvider>
  );
}
