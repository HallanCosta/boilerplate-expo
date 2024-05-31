'use client';
import { ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components/native';

export type ThemeIdProps = 'theme1' | 'theme2';

type WhiteLabelProviderProps = {
  children: ReactNode;
  theme: DefaultTheme;
};

export const WhiteLabelProvider = ({
  children,
  theme,
}: WhiteLabelProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
