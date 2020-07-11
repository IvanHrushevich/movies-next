import Head from 'next/head';

import classes from './Layout.module.scss';
import { Footer } from '../Footer/Footer';

export function Layout({ children }) {
  return (
    <div className={classes.root}>
      <Head>
        <title>Movies</title>
        <meta charSet="utf-8" />
      </Head>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
