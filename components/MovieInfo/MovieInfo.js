import React from 'react';
import PropTypes from 'prop-types';

import classes from './MovieInfo.module.scss';

export const MovieInfo = ({
  src,
  title,
  vote,
  genre,
  year,
  runtime,
  overview,
}) => (
  <section className={classes.container}>
    <img className={classes.pic} src={src}></img>
    <div className={classes.info}>
      <div>
        <div className={classes.titleBlock}>
          <p className={classes.title}>{title}</p>
          <div className={classes.voteBlock}>
            <span className={classes.vote}>{vote}</span>
          </div>
        </div>
        <p className={classes.genre}>{genre}</p>
        <div>
          <span className={classes.year}>
            {year}
            <span className={classes.unit}>year</span>
          </span>
          <span className={classes.runtime}>
            {runtime}
            <span className={classes.unit}>min</span>
          </span>
        </div>
        <p className={classes.overview}>{overview}</p>
      </div>
    </div>
  </section>
);

MovieInfo.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  vote: PropTypes.number,
  genre: PropTypes.string,
  year: PropTypes.number,
  runtime: PropTypes.number,
  overview: PropTypes.string,
};
