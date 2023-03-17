import React, { FC } from 'react';

import { Text } from '@/components/Text';
import { useRouter } from 'next/router';

import styles from './Sidebar.module.scss';

const categories = [
  { id: 1, categoryName: 'Kitoblar', category: 'books' },
  {
    id: 2,
    categoryName: 'Kiyimlar',
    category: 'clothes',
  },
  {
    id: 2,
    categoryName: 'Soatlar',
    category: 'clock',
  },
];

export const Sidebar: FC = () => {
  const router = useRouter();

  const handleChangeRouter = (categoryName: string) => {
    router.push({
      query: {
        c: categoryName,
      },
    });
  };

  return (
    <div className={styles.sidebar}>
        <Text className={styles.title} as="h4" text="Bo'limlar" />
        <ul className={styles.categories}>
          {categories.map(category => (
            <li key={category.id} className={styles.categoryItem}>
              <button
                className={styles.categoryItemBtn}
                onClick={() => handleChangeRouter(category.category)}
              >
                {category.categoryName}
              </button>
            </li>
          ))}
        </ul>
      </div>
  );
};
