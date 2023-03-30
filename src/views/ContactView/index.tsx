import React from 'react';

import { Container } from '@/components/Container';
import { Text } from '@/components/Text';

import styles from './ContactView.module.scss';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';

export const ContactView = () => {
  return (
    <div className={styles.contactView}>
      <Container>
        <Text as="h2" text="Contact View" />
        <YMaps
          query={{
            ns: 'use-load-option',
            load: 'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon',
          }}
        >
          <Map
            width={'100%'}
            // height={'100%'}
            defaultState={{
              center: [41.2942336, 69.2518912],
              zoom: 8,
              controls: ['zoomControl', 'fullscreenControl'],
            }}
          >
            <Placemark
              defaultGeometry={[41.2942336, 69.2518912]}
              properties={{
                balloonContentBody: 'This is balloon loaded by the Yandex.Maps API module system',
              }}
            />
          </Map>
        </YMaps>
        ;
      </Container>
    </div>
  );
};
