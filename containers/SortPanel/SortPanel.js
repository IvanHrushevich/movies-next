import classes from './SortPanel.module.scss';
import { SortControl } from '../../components/index';

const SortPanel = (props) => (
  <section className={classes.section}>
    <div className={`container-global ${classes.panelContainer}`}>
      <SortControl
        title="sort by"
        btnLeft={{
          label: 'release date',
          value: 'release_date',
          checked: true,
        }}
        btnRight={{
          label: 'rating',
          value: 'vote_average',
        }}
        inputName="sortBy"
        onChange={(event) => {
          props.changeSortBy(event.target.value);
          props.fetchMovies();
        }}
      />
    </div>
  </section>
);

export default SortPanel;
