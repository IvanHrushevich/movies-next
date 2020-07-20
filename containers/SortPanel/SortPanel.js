import { useDispatch } from 'react-redux';

import classes from './SortPanel.module.scss';
import { SortControl } from '../../components/index';
import { movieActions } from '../../store/actions';

const SortPanel = () => {
  const dispatch = useDispatch();

  return (
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
            dispatch(movieActions.changeSortBy(event.target.value));
          }}
        />
      </div>
    </section>
  );
};

export default SortPanel;
