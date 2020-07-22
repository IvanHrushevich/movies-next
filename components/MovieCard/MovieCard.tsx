import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import { createUseStyles } from 'react-jss';

import { Movie } from '../../shared';

const useStyles: any = createUseStyles({
  container: {
    display: 'block',
    width: '32rem',
    height: '53rem',
    margin: '2rem',

    '&:hover': {
      opacity: 0.5,
    },
  },

  pic: {
    width: '100%',
    height: '45rem',
    marginBottom: '1.8rem',
  },

  info: {
    display: 'flex',
    fontDisplay: 'row',
    justifyContent: 'space-between',
  },

  title: {
    fontSize: '1.8rem',
    marginBottom: '1rem',
  },

  genre: {
    fontSize: '1.4rem',
  },

  year: {
    height: '2.5rem',
    padding: '0.5rem 1rem',
    border: '1px solid #fff',
    borderRadius: '0.4rem',
  },
});

const MovieCard: FunctionComponent<Movie> = ({
  src,
  title,
  genre,
  year,
  id,
}) => {
  const classes = useStyles();

  return (
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
};

export default MovieCard;
