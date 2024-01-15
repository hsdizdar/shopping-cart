export enum ButtonTypes {
  Text = 'text',
  Default = 'default',
}
export interface ButtonProps {
  type?: 'button' | 'reset' | 'submit';
  label: string;
  isDisabled?: boolean;
  variant?: ButtonTypes;
  onClick?: () => void;
}
