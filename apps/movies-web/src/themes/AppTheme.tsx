import {
  createTheme,
  CssBaseline,
  PaletteMode,
  useMediaQuery,
} from '@mui/material';
import { amber, deepOrange, grey } from '@mui/material/colors';
import { ThemeProvider } from '@mui/system';
import React from 'react';

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: deepOrange[900],
            paper: deepOrange[900],
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }),
  },
});

interface ColorModeContextProps {
  toggleColorMode: () => void;
}

export const ColorModeContext = React.createContext<ColorModeContextProps>({
  toggleColorMode: () => null,
});

export const AppTheme: React.FC = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [currentMode, setCurrentMode] = React.useState<PaletteMode>(
    prefersDarkMode ? 'dark' : 'light'
  );

  const colorMode = React.useMemo<ColorModeContextProps>(
    () => ({
      toggleColorMode: () =>
        setCurrentMode((previousMode) =>
          previousMode === 'light' ? 'dark' : 'light'
        ),
    }),
    []
  );

  const theme = React.useMemo(
    () => createTheme(getDesignTokens(currentMode)),
    [currentMode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
