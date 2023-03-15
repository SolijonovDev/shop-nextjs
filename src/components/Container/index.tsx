import React, { FC } from 'react';
import cn from 'classnames';
import { IContainerProps } from './Container.type';
import styles from './Container.module.scss';

export const Container: FC<IContainerProps> = props => {
  const { className = '', ...rest } = props;
  return <div className={cn(styles.container, { [className]: className })} {...rest} />;
};
