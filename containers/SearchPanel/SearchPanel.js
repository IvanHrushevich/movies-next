import { useRouter } from 'next/router';

import classes from './SearchPanel.module.scss';
import SortPanel from '../SortPanel/SortPanel';
import { Logo, SearchControl, SortControl } from '../../components';

const SearchPanel = () => {
  const router = useRouter();
  return (
    <>
      <header className={classes.sectionHeader}>
        <Logo />
        <div className={`container-global ${classes.searchBlock}`}>
          <p className={classes.title}>FIND YOUR MOVIE</p>
          <div className={classes.searchControl}>
            <SearchControl
              onSearchClick={(searchStr) => {
                router.push(`/search/title/${searchStr}`);
              }}
            />
          </div>
          <SortControl
            title="search by"
            btnLeft={{
              label: 'title',
              value: 'title',
              checked: true,
            }}
            btnRight={{
              label: 'genre',
              value: 'genres',
            }}
            inputName="searchBy"
            onChange={(event) => {
              // props.changeSearchBy(event.target.value);
            }}
          />
        </div>
      </header>
      <SortPanel />
    </>
  );
};

export default SearchPanel;
