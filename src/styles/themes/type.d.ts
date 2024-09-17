import 'styled-components/native';

import { ThemeColorRgbProps } from '@root/styles/themes/types/colors/rgb';
import { ThemeColorBaseProps } from '@root/styles/themes/types/colors/base';

export type ThemeColorsProps = {
  base: ThemeColorBaseProps;
  rgb: ThemeColorRgbProps
};

export type ThemeFontsProps = {
  title: {
    small: number,
    medium: number,
    large: number
  },
  text: {
    small: number,
    medium: number,
    large: number
  }
};

export type ThemeMetadaProps = {
  title: string;
  description: string;
};

export type ThemeProps = {
  metadata: ThemeMetadaProps;
  colors: ThemeColorsProps;
  fonts: ThemeFontsProps;
};

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeProps {}
}
