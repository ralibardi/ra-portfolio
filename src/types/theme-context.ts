import { Theme } from './theme';

export interface IThemeContext {
  theme: Theme;
  toggleTheme: () => void;
}
