import React from 'react';
import PropTypes from 'prop-types';

import classes from './SortControl.module.scss';

export const SortControl = ({
  title,
  btnLeft,
  btnRight,
  inputName,
  onChange,
}) => (
  <div className={classes.container}>
    <span className={classes.title}>{title}</span>

    <input
      className={classes.input}
      type="radio"
      name={inputName}
      value={btnLeft.value}
      id={btnLeft.label}
      defaultChecked={btnLeft.checked}
      onChange={onChange}
    />
    <label className={classes.label} htmlFor={btnLeft.label}>
      {btnLeft.label}
    </label>

    <input
      className={classes.input}
      type="radio"
      name={inputName}
      value={btnRight.value}
      id={btnRight.label}
      defaultChecked={btnRight.checked}
      onChange={onChange}
    />
    <label className={classes.label} htmlFor={btnRight.label}>
      {btnRight.label}
    </label>
  </div>
);

SortControl.propTypes = {
  title: PropTypes.string,
  btnLeft: PropTypes.object,
  btnRight: PropTypes.object,
  inputName: PropTypes.string,
};
