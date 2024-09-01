import { renderHook } from '@testing-library/react';
import { useTheme } from './use-theme';
import { customRenderHook } from '@utils/test-utilities';
import { IThemeContext } from '@type/theme-context';

describe('useTheme', () => {
  it('should return the context when used within a ThemeProvider', () => {
    const { result } = customRenderHook(() => useTheme());

    expect((result.current as IThemeContext).theme).toBe('light');
  });

  it('should throw an error when used outside a ThemeProvider', () => {
    const { result } = renderHook(() => useTheme());

    expect((result.current as Error).message).toBe(
      'useTheme must be used within a ThemeProvider',
    );
  });
});
