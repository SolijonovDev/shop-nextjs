import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { useUpdate } from 'react-use';

import { Container } from '@/components/Container';
import { BannerItem } from './BannerItem';
import { Button } from '@/components/Button';

import 'swiper/css';
import styles from './HomeBanner.module.scss';

const bannerData = [
  {
    id: 1,
    imgUrl: '	https://images.uzum.uz/cg7c9sng49devoaaf0vg/main_page_banner.jpg',
  },
  {
    id: 2,
    imgUrl: '	https://images.uzum.uz/cg7hqbnhj8j9g699qoag/main_page_banner.jpg',
  },
  {
    id: 3,
    imgUrl: '	https://images.uzum.uz/cge4e8fg49devoabek00/main_page_banner.jpg',
  },
  {
    id: 4,
    imgUrl: 'https://images.uzum.uz/cfv22a7hgiov1qid9m1g/main_page_banner.jpg',
  },
];

export const HomeBanner = () => {
  const update = useUpdate();
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className={styles.homeBanner}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={10}
        loop={true}
        onBeforeInit={update}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        slidesPerView={1}
        onSwiper={swiper => {
          // @ts-ignore
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          //@ts-ignore
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
      >
        {bannerData.map(banner => (
          <SwiperSlide key={banner.id}>
            <BannerItem imgSrc={banner.imgUrl}>
              <p>{banner.text}</p>
            </BannerItem>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.controls}>
        <Button className={styles.prevBtn} ref={navigationPrevRef}>
          <svg
            data-v-46bd6466=""
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.8106 20.4983C16.0857 20.1887 16.0579 19.7146 15.7483 19.4394L7.8789 12L15.7483 4.56055C16.0579 4.28536 16.0857 3.81131 15.8106 3.50172C15.5354 3.19213 15.0613 3.16425 14.7517 3.43944L6.25173 11.4394C6.09161 11.5818 6 11.7858 6 12C6 12.2142 6.09161 12.4182 6.25173 12.5605L14.7517 20.5605C15.0613 20.8357 15.5354 20.8079 15.8106 20.4983Z"
              fill="black"
            ></path>
          </svg>
        </Button>
        <Button className={styles.nextBtn} ref={navigationNextRef}>
          <svg
            data-v-46bd6466=""
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.18945 20.4983C7.91426 20.1887 7.94215 19.7146 8.25174 19.4394L16.1211 12L8.25173 4.56055C7.94215 4.28536 7.91426 3.81131 8.18945 3.50172C8.46464 3.19213 8.93869 3.16425 9.24828 3.43944L17.7483 11.4394C17.9084 11.5818 18 11.7858 18 12C18 12.2142 17.9084 12.4182 17.7483 12.5605L9.24828 20.5605C8.93869 20.8357 8.46464 20.8079 8.18945 20.4983Z"
              fill="black"
            ></path>
          </svg>
        </Button>
      </div>
    </div>
  );
};
