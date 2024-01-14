import React, { FC } from 'react';

import Text from 'components/text/Text';
import { TextTagName } from 'components/text/Text.types';

import { ButtonProps } from './Button.types';
import './Button.styles.scss';

const Button: FC<ButtonProps> = ({ label, isDisabled = false, onClick, ...props }) => (
  <button className="button" disabled={isDisabled} onClick={onClick} {...props}>
    <Text tagName={TextTagName.Label} className="button-label">
      {label}
    </Text>
  </button>
);

export default Button;
