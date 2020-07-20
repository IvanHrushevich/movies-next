import Head from 'next/head';

import classes from './Layout.module.scss';
import { Footer } from '../Footer/Footer';

export function Layout({ children }) {
  return (
    <div className={classes.root}>
      <Head>
        <title>Movies</title>
        <meta charSet="utf-8" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={classes.content}>{children}</div>
      <Footer />
    </div>
  );
}
