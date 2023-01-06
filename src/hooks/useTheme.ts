import { useContext } from 'react';
import { ThemeContext } from '../theme/ThemeContext';
import { Theme } from '../theme/types';

const useTheme = (): Theme => useContext<Theme>(ThemeContext);

export default useTheme;
