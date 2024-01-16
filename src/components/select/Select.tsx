import React, { FC, useEffect } from 'react';

import { SelectProps } from './Select.types';
import './Select.styles.scss';

const Select: FC<SelectProps> = ({
  name,
  isDisabled,
  options,
  placeholder,
  className,
  value,
  onChange,
}) => (
  <select
    name={name}
    className={className ? `select-container ${className}` : `select-container`}
    value={value}
    disabled={isDisabled}
    onChange={onChange}
  >
    <option value={undefined}>{placeholder}</option>
    {options.map((option, index) => (
      <option key={`${option.id}-${index}`} value={option.id}>
        {option.name}
      </option>
    ))}
  </select>
);

export default Select;
