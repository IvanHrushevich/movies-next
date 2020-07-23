import { FunctionComponent } from 'react';

import classes from '../styles/404.module.scss';

const NotFound: FunctionComponent = () => {
  return (
    <div className={classes.container}>
      <div className={classes.message}>
        <p>404.</p>
        <p>Page not found.</p>
      </div>
    </div>
  );
};

export default NotFound;
