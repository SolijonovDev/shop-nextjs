import React, { FC, forwardRef } from 'react';
import cn from 'classnames';

import { IButtonProps, Ref } from './Button.type';
import styles from './Button.module.scss';

export const Button = forwardRef<Ref, IButtonProps>((props, ref) => {
  const { children, className = '' } = props;
  return (
    <button ref={ref} className={cn(styles.button, { [className]: className })}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';
