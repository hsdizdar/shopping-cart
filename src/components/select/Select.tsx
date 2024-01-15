import React, { FC } from 'react';

import { SelectProps } from './Select.types';
import './Select.styles.scss';

const Select: FC<SelectProps> = ({ isDisabled, options, placeholder }) => {
  return (
    <select className="select-container" disabled={isDisabled}>
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
