import { DynamicType } from 'src/constants/types';

export interface SelectProps {
  options: { label: string; value: DynamicType }[];
  isDisabled?: boolean;
  placeholder?: string;
}
