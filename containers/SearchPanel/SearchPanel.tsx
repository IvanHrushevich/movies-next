import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

import classes from './SearchPanel.module.scss';
import SortPanel from '../SortPanel/SortPanel';
import { Logo, SearchControl, SortControl } from '../../components';
import { movieActions } from '../../store/actions';

const SearchPanel: FunctionComponent = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const searchBy = useSelector((state) => state.searchBy);

  return (
    <>
      <header className={classes.sectionHeader}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <div className={`containerGlobal ${classes.searchBlock}`}>
          <p className={classes.title}>FIND YOUR MOVIE</p>
          <div className={classes.searchControl}>
            <SearchControl
              onSearchClick={(searchStr) => {
                router.push(
                  '/search/[searchBy]/[searchStr]',
                  `/search/${searchBy}/${searchStr}`
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
