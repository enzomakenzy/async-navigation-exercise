import { BottomAppRoutes } from '@routes/bottom-app.routes';
import { Home } from '@screens/Home';
import { useFonts, Quicksand_400Regular, Quicksand_500Medium, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Loading } from '@components/Loading';

import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme';
import { StatusBar } from 'react-native';

export default function App() {
  const [ fontsLoaded ] = useFonts({ Quicksand_400Regular, Quicksand_500Medium, Quicksand_700Bold })

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="light-content"
      />
      
      <ThemeProvider theme={theme}>
        {
          fontsLoaded ? <BottomAppRoutes /> : <Loading />
        }
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

