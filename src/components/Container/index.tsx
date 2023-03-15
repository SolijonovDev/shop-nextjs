import React, { FC } from 'react';
import { IContainerProps } from './Container.type';

import styles from './Container.module.scss';

export const Container: FC<IContainerProps> = props => {
  return <div className={styles.container} {...props} />;
};
