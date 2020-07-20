import classes from '../styles/404.module.scss';

export default function NotFound() {
  return (
    <div className={classes.container}>
      <div className={classes.message}>
        <p>404.</p>
        <p>Page not found.</p>
      </div>
    </div>
  );
}
