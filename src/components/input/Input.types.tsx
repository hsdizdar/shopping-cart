import { DynamicType } from 'src/constants/types';

export interface InputProps {
  type?: string;
  name?: string;
  placeholder?: string;
  className?: string;
  value?: DynamicType;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
