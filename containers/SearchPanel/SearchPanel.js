import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

import classes from './SearchPanel.module.scss';
import SortPanel from '../SortPanel/SortPanel';
import { Logo, SearchControl, SortControl } from '../../components';
import { movieActions } from '../../store/actions';

const SearchPanel = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <>
      <header className={classes.sectionHeader}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <div className={`container-global ${classes.searchBlock}`}>
          <p className={classes.title}>FIND YOUR MOVIE</p>
          <div className={classes.searchControl}>
            <SearchControl
              onSearchClick={(searchStr) => {
                router.push(
                  '/search/[searchBy]/[searchStr]',
                  `/search/title/${searchStr}`
                );
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
              dispatch(movieActions.changeSearchBy(event.target.value));
            }}
          />
        </div>
      </header>
      <SortPanel />
    </>
  );
};

export default SearchPanel;
