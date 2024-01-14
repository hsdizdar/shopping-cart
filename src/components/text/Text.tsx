import React, { FC } from 'react';

import { TextProps, TextTagName } from './Text.types';

const Text: FC<TextProps> = ({ tagName = TextTagName.Paragraf, className, children, ...props }) =>
  React.createElement(tagName, { className, ...props }, children);

export default Text;
