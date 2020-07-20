import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import classes from './MovieCard.module.scss';

export const MovieCard = ({ src, title, genre, year, id }) => (
  <Link href="/film/[id]" as={`/film/${id}`}>
    <a className={classes.container}>
      <img className={classes.pic} src={src}></img>
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

MovieCard.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  genre: PropTypes.string,
  year: PropTypes.number,
  id: PropTypes.number,
};
