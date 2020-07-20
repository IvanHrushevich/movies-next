import { FunctionComponent } from 'react';
import Link from 'next/link';

import classes from './MovieCard.module.scss';

type Props = {
  src: string;
  title: string;
  genre: string;
  year: number;
  id: string;
};

const MovieCard: FunctionComponent<Props> = ({
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
