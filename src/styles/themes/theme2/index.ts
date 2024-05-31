import { ThemeProps } from "@root/styles/themes/type";

import { themeColorRgb } from "@root/styles/themes/theme2/colors/rgb";
import { themeColorBase } from "@root/styles/themes/theme2/colors/base";

import { themeFontTitle } from "@root/styles/themes/theme2/fonts/title";
import { themeFontText } from "@root/styles/themes/theme2/fonts/text";

const theme: ThemeProps = {
  metadata: {
    title: 'Title Boilerplate',
    description: 'Description Boilerplate'
  },
  colors: {
    base: themeColorBase,
    rgb: themeColorRgb,
  },
  fonts: {
    title: themeFontTitle,
    text: themeFontText
  }
};

export default theme;