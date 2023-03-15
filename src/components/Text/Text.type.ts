import React from 'react';

export interface ITextProps {
  as?: string;
  children?: React.ReactNode;
  text?: string;
  className?: string;
  align?: string | undefined | null;
}
