import { FunctionComponent } from 'react';

import classes from './Logo.module.scss';

const Logo: FunctionComponent = () => (
  <div className={classes.container}>
    <span className={classes.titleBold}>netflix</span>
    <span>roulette</span>
  </div>
);

export default Logo;
