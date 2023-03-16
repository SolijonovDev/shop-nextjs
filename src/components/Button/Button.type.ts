import { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode } from 'react';

export interface IButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export type Ref = HTMLButtonElement;
