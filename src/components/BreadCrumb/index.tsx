import React, { FC } from 'react';
import cn from 'classnames';

import Link from 'next/link';
import { Text } from '../Text';

import styles from './BreadCrumb.module.scss';

interface IBreadCrumbProps {
  items: any[];
  className?: string;
}

export const BreadCrumb: FC<IBreadCrumbProps> = ({ items, className, ...rest }) => {
  return (
    <div className={cn(styles.breadCrumb, className)} {...rest}>
      {items.map(({ id, link, text }) => {
        if (link) {
          return (
            <Link className={styles.link} key={id} href={link}>
              <span key={id}>{text}</span> <span className={styles.separator}>/</span>
            </Link>
          );
        } else {
          return <Text className={styles.text} key={id} text={text} />;
        }
      })}
    </div>
  );
};
