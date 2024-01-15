import { DynamicType } from 'src/constants/types';

export interface SelectProps {
  name?: string;
  options: { label: string; value: DynamicType }[];
  isDisabled?: boolean;
  placeholder?: string;
  className?: string;
  value?: DynamicType;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
