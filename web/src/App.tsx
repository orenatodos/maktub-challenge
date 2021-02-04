import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import GlobalStyle from './styles/global';

import AppProvider from './hooks';
import Routes from './routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppProvider>
        <Routes />
      </AppProvider>
    </ThemeProvider>
  );
}
