import React, { FC } from 'react';
import cn from 'classnames';
import { Range, getTrackBackground } from 'react-range';

import { Text } from '@/components/Text';
import { useRouter } from 'next/router';

import styles from './Sidebar.module.scss';

const STEP = 1000;
const MIN = 2000;
const MAX = 100000;
const rtl = false;

const categories = [
  { id: 1, categoryName: 'Kitoblar', category: 'books' },
  {
    id: 2,
    categoryName: 'Kiyimlar',
    category: 'clothes',
  },
  {
    id: 3,
    categoryName: 'Soatlar',
    category: 'watches',
  },
  {
    id: 4,
    categoryName: 'Bolalar tovarlari',
    category: 'child-products',
  },
];

export const Sidebar: FC = () => {
  const { push, query } = useRouter();
  const { c: categoryName } = query;
  const [values, setValues] = React.useState([MIN, MAX]);

  const handleChangeRouter = (categoryName: string) => {
    push({
      query: {
        c: categoryName,
      },
    });
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.content}>
        <Text className={styles.title} as="h5" text="Bo'limlar" />
        <ul className={styles.categories}>
          {categories.map(category => (
            <li key={category.id} className={styles.categoryItem}>
              <button
                className={cn(styles.categoryItemBtn, {
                  [styles.active]: categoryName === category.category,
                })}
                onClick={() => handleChangeRouter(category.category)}
              >
                {category.categoryName}
              </button>
            </li>
          ))}
        </ul>
        <div className={styles.rangePanel}>
          <Text className={styles.rangePanelTitle} as="h5" text="Narx" />
          <div className={styles.priceRangeTexts}>
            <Text as="p" text={`dan: ${values[0]}`} />
            <Text as="p" text={`oldin: ${values[1]}`} />
          </div>
          <Range
            values={values}
            step={STEP}
            min={MIN}
            max={MAX}
            rtl={rtl}
            onChange={values => {
              setValues(values);
            }}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                  ...props.style,
                  height: '36px',
                  display: 'flex',
                  width: '100%',
                }}
              >
                <div
                  ref={props.ref}
                  style={{
                    height: '5px',
                    width: '100%',
                    borderRadius: '4px',
                    background: getTrackBackground({
                      values,
                      colors: ['#ccc', '#548BF4', '#ccc'],
                      min: MIN,
                      max: MAX,
                      rtl,
                    }),
                    alignSelf: 'center',
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: '20px',
                  width: '20px',
                  borderRadius: '50%',
                  backgroundColor: '#FFF',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow: '0px 2px 6px #AAA',
                  outline: 'none',
                  border: 'none',
                }}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};
