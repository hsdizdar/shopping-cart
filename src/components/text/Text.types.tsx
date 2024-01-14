import { ReactNode } from 'react';

export enum TextTagName {
  Paragraf = 'p',
  Span = 'span',
  Label = 'label',
}

export interface TextProps {
  tagName?: TextTagName;
  children?: ReactNode;
  className?: string;
}
