import React, { FC } from 'react';
import cn from 'classnames';

import { ITextProps } from './Text.type';
import styles from './Text.module.scss';

export const Text: FC<ITextProps> = props => {
  const { as: Component = 'p', children, text, className, align } = props;
  return (
    //@ts-ignore
    <Component
      className={cn(styles.text, styles[Component], {
        //@ts-ignore
        [className]: className,
        //@ts-ignore
        [styles[align]]: align,
      })}
    >
      {text || children}
    </Component>
  );
};
