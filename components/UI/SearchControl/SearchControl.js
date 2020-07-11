import React, { useState } from 'react';

import classes from './SearchControl.module.scss';

export const SearchControl = ({ onSearchClick }) => {
  const [input, setInput] = useState('');

  return (
    <div className={classes.container}>
      <input
        value={input}
        onChange={(event) => setInput(event.target.value)}
        className={classes.input}
        placeholder="Search"
      />
      <button className={classes.button} onClick={() => onSearchClick(input)}>
        search
      </button>
    </div>
  );
};
