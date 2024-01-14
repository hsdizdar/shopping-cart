import React, { FC } from 'react';

import { InputProps } from './Input.types';
import './Input.styles.scss';

const Input: FC<InputProps> = ({ placeholder, ...props }) => (
  <input className="input" placeholder={placeholder} {...props} />
);

export default Input;
