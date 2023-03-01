import { InputHTMLAttributes } from 'react';

// export enum ButtonSize {
//   S = 'size_s',
//   M = 'size_m',
//   L = 'size_l',
//   XL = 'size_xl',
// }

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

export interface InputProps extends HTMLInputProps {
  className?: string;
  value: string;
  onChange: (value: string) => void;
  type: string;
  placeholder?: string;
  customPlaceholder?: string;
  autofocus?: boolean;
  isFormOpen?: boolean;
}
