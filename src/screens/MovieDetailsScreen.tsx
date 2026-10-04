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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },

  emoji: {
    fontSize: 60,
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },

  info: {
    fontSize: 17,
    marginBottom: 8,
    color: '#555',
  },

  description: {
    fontSize: 17,
    textAlign: 'center',
    lineHeight: 25,
    marginTop: 15,
    marginBottom: 30,
  },

  button: {
    backgroundColor: '#333',
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