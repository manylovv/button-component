import defaultTheme from './defaultTheme';
import { Theme } from './types';

export const createTheme = (theme: Theme): Theme => {
  return {
    button: {
      ...defaultTheme.button,
      ...theme.button,
    },
  };
};
