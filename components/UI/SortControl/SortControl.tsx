import { FunctionComponent } from 'react';

import { SortControlButton } from '../../../shared';
import classes from './SortControl.module.scss';

type Props = {
  title: string;
  btnLeft: SortControlButton;
  btnRight: SortControlButton;
  inputName: string;
  onChange: (event: any) => void;
};

const SortControl: FunctionComponent<Props> = ({
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

export default SortControl;
