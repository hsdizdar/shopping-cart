import React, { FC } from 'react';

import Text from 'components/text/Text';
import { TextTagName } from 'components/text/Text.types';

import { ButtonProps, ButtonTypes } from './Button.types';
import './Button.styles.scss';

const Button: FC<ButtonProps> = ({
  type = 'button',
  label,
  variant = ButtonTypes.Default,
  isDisabled = false,
  onClick,
  ...props
}) => (
  <button
    type={type}
    className={variant === ButtonTypes.Text ? 'text-button' : 'default-button'}
    disabled={isDisabled}
    onClick={onClick}
    {...props}
  >
    {label}
  </button>
);

export default Button;
