import { FunctionComponent } from 'react';

import classes from './MovieInfo.module.scss';

type Props = {
  src: string;
  title: string;
  vote: string;
  genre: string;
  year: string;
  runtime: string;
  overview: string;
};

const MovieInfo: FunctionComponent<Props> = ({
  src,
  title,
  vote,
  genre,
  year,
  runtime,
  overview,
}) => (
  <section className={classes.container}>
    <img alt={src} className={classes.pic} src={src} />
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

export default MovieInfo;
