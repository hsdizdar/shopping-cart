import React, { FC } from 'react';

import { InputProps } from './Input.types';
import './Input.styles.scss';

const Input: FC<InputProps> = ({
  type,
  name,
  placeholder,
  value,
  className,
  onChange,
  ...props
}) => (
  <input
    type={type}
    name={name}
    value={value}
    className={className ? `input-container ${className}` : `input-container`}
    placeholder={placeholder}
    onChange={onChange}
    {...props}
  />
);

export default Input;
