import React from 'react';

import { Container } from '@/components/Container';
import { Section } from './Section';

import styles from './Sections.module.scss';

const sections = [
  { id: 1, title: 'Yangi chegirmalar' },
  { id: 2, title: 'Siz uchun tanladik' },
  { id: 3, title: 'Ommabop tovarlar' },
  { id: 4, title: 'Yangi kelganlar' },
];

export const Sections = () => {
  return (
    <div className={styles.sections}>
      <Container>
        {sections.map(section => (
          <Section key={section.id} title={section.title} />
        ))}
      </Container>
    </div>
  );
};
