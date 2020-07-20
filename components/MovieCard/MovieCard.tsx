import Link from 'next/link';
import { FunctionComponent } from 'react';

import { Movie } from '../../shared';
import classes from './MovieCard.module.scss';

const MovieCard: FunctionComponent<Movie> = ({
  src,
  title,
  genre,
  year,
  id,
}) => (
  <Link href="/film/[id]" as={`/film/${id}`}>
    <a href="/#" className={classes.container}>
      <img alt={title} className={classes.pic} src={src} />
      <div className={classes.info}>
        <div>
          <p className={classes.title}>{title}</p>
          <p className={classes.genre}>{genre}</p>
        </div>
        <span className={classes.year}>{year}</span>
      </div>
    </a>
  </Link>
);

export default MovieCard;
