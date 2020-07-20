import React from 'react';

import classes from './Footer.module.scss';
import { Logo } from '../UI/index';

const Footer = () => (
  <footer className={classes.section}>
    <Logo />
  </footer>
);

export default Footer;
