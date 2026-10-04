import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import MovieDetailsScreen from './src/screens/MovieDetailsScreen';
import MovieListScreen from './src/screens/MovieListScreen';

export type RootStackParamList = {
  Home: undefined;
  Movies: undefined;
  Details: {
    title: string;
    genre: string;
    year: string;
    description: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Movie Explorer' }}
        />

        <Stack.Screen
          name="Movies"
          component={MovieListScreen}
          options={{ title: 'Movies' }}
        />

        <Stack.Screen
          name="Details"
          component={MovieDetailsScreen}
          options={{ title: 'Movie Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}