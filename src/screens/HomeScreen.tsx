import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎬 Movie Explorer</Text>

      <Text style={styles.description}>
        Welcome to Movie Explorer!
      </Text>

      <Text style={styles.subtitle}>
        Discover movies and view their details.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Movies')}
      >
        <Text style={styles.buttonText}>
          Explore Movies
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  description: {
    fontSize: 18,
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 30,
  },

  button: {
    backgroundColor: '#333',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },

  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
});