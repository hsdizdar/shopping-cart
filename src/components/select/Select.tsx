import React, { FC } from 'react';

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
}) => {
  return (
    <select
      name={name}
      className={className ? `select-container ${className}` : `select-container`}
      disabled={isDisabled}
      value={value}
      onChange={onChange}
    >
      <option hidden disabled selected value={undefined}>
        {placeholder}
      </option>
      {options.map((option, index) => (
        <option key={`${option.label}-${index}`} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
