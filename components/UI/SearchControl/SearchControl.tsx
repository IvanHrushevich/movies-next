import { useState, FunctionComponent } from 'react';

import classes from './SearchControl.module.scss';

const SearchControl: FunctionComponent<{
  onSearchClick: (input: string) => void;
}> = ({ onSearchClick }) => {
  const [input, setInput] = useState('');

  return (
    <div className={classes.container}>
      <input
        value={input}
        onChange={(event) => setInput(event.target.value)}
        className={classes.input}
        placeholder="Search"
      />
      <button
        type="button"
        className={classes.button}
        onClick={() => onSearchClick(input)}
      >
        search
      </button>
    </div>
  );
};

export default SearchControl;
