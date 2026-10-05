import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function MovieDetailsScreen({
  navigation,
  route,
}: Props) {
  const { title, genre, year, description } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🎬</Text>

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.info}>
        Genre: {genre}
      </Text>

      <Text style={styles.info}>
        Year: {year}
      </Text>

      <Text style={styles.description}>
        {description}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>
          ← Back to Movies
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
  },

  emoji: {
    fontSize: 65,
    marginBottom: 22,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  info: {
    fontSize: 19,
    marginBottom: 10,
    color: '#18f5e3',
  },

  description: {
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 30,
    marginTop: 15,
    marginBottom: 30,
  },

  button: {
    backgroundColor: '#41e6f2',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});