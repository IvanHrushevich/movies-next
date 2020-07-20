import { FunctionComponent } from 'react';

import classes from './Footer.module.scss';
import { Logo } from '../UI/index';

const Footer: FunctionComponent = () => (
  <footer className={classes.section}>
    <Logo />
  </footer>
);

export default Footer;
