import React, { FunctionComponent } from 'react';
import { createUseStyles } from 'react-jss';

import classes from './Logo.module.scss';

const useStyles: any = createUseStyles({
  container: {
    fontSize: '2rem',
    color: '#f65261',
  },

  titleBold: {
    fontWeight: '800',
  },
});

const Logo: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <span className={classes.titleBold}>netflix</span>
      <span>roulette</span>
    </div>
  );
};

export default Logo;
