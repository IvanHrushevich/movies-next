import React, { FunctionComponent, useState } from 'react';
import { createUseStyles } from 'react-jss';

import { button } from '../../../shared';

const useStyles: any = createUseStyles({
  container: {
    height: '4.5rem',
    maxWidth: '100rem',
    display: 'flex',
    marginBottom: '2rem',
  },

  input: {
    backgroundColor: 'rgba(66, 66, 66, 0.7)',
    flexGrow: '1',
    fontSize: '2rem',
    color: '#fff',
    padding: '0 1rem',
    marginRight: '1rem',
    borderRadius: '0.4rem',
  },

  button: {
    ...button,
    width: '200px',
    backgroundColor: '#f65261',
    fontSize: '1.4rem',
  },
});

const SearchControl: FunctionComponent<{
  onSearchClick: (input: string) => void;
}> = ({ onSearchClick }) => {
  const [input, setInput] = useState('');
  const classes = useStyles();

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
