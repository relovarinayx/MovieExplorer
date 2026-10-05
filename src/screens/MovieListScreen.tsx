import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Movies'>;

const movies = [
  {
    title: 'Avengers: Endgame',
    genre: 'Action, Adventure',
    year: '2019',
    description:
      'The Avengers must work together to defeat Thanos and save the universe.',
  },
  {
    title: 'The Lion King',
    genre: 'Animation, Adventure',
    year: '2019',
    description:
      'Simba must find the courage to take his place as the rightful king.',
  },
  {
    title: 'Spider-Man: No Way Home',
    genre: 'Action, Adventure',
    year: '2021',
    description:
      'Spider-Man asks for help after his identity is revealed, causing unexpected problems.',
  },
  {
    title: 'Jurassic World',
  genre: 'Action, Adventure, Sci-Fi',
  year: '2015',
  description:
    'A dinosaur theme park becomes dangerous when a genetically modified dinosaur escapes.',
  },
  {
    title: 'Avatar',
  genre: 'Action, Adventure, Sci-Fi',
  year: '2009',
  description:
    'A former Marine explores the alien world of Pandora and becomes involved in its conflict.',
},
];

export default function MovieListScreen({ navigation }: Props) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🎬 Popular Movies</Text>

      {movies.map((movie) => (
        <TouchableOpacity
          key={movie.title}
          style={styles.card}
          onPress={() =>
            navigation.navigate('Details', {
              title: movie.title,
              genre: movie.genre,
              year: movie.year,
              description: movie.description,
            })
          }
        >
          <Text style={styles.movieTitle}>{movie.title}</Text>

          <Text style={styles.movieInfo}>
            {movie.genre} • {movie.year}
          </Text>

          <Text style={styles.viewText}>
            Tap to view details →
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  search: {
    backgroundColor: '#F1F1F1',
    paddingHorizontal: 18,
    paddingVertical: 15,
    borderRadius: 12,
    fontSize: 18,
    marginBottom: 20,
  },

  empty: {
    textAlign: 'center',
    color: '#777',
    fontSize: 16,
    marginTop: 20,
  },

  card: {
    backgroundColor: '#e1e9ec',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },

  movieTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  movieInfo: {
    fontSize: 15,
    color: '#605e5d',
    marginBottom: 12,
  },

  viewText: {
    fontSize: 16,
    color: '#9a9491',
    fontWeight: 'bold',
  },
});