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
    <Text
      tagName={TextTagName.Label}
      className={variant === ButtonTypes.Text ? 'text-button-label' : 'default-button-label'}
    >
      {label}
    </Text>
  </button>
);

export default Button;
