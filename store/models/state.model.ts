import { Movie } from '../../shared';

export interface State {
  movies: Array<Movie>;
  searchBy: string;
  sortBy: string;
  selectedMovie: Movie;
}
