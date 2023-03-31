import React, { FC } from 'react';

import { Text } from '@/components/Text';
import { PatternFormat } from 'react-number-format';

interface ISignInPopupProps {
  isOpen: Boolean;
  close: () => void;
}

import styles from './SignInPopup.module.scss';

export const SignInPopup: FC<ISignInPopupProps> = ({ isOpen, close }) => {
  if (!isOpen) return <div></div>;
  return (
    <div className={styles.signInPopup}>
      <div className={styles.content}>
        <div className={styles.top}>
          <button className={styles.close} onClick={close}>
            <svg
              data-v-47cf635a=""
              width="24"
              height="24"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.783 5.27764C16.0759 4.98475 16.0759 4.50988 15.783 4.21698C15.4901 3.92409 15.0152 3.92409 14.7223 4.21699L10 8.93934L5.28033 4.21966C4.98744 3.92676 4.51256 3.92676 4.21967 4.21966C3.92678 4.51255 3.92678 4.98742 4.21967 5.28032L8.93935 10L4.22165 14.7177C3.92876 15.0106 3.92876 15.4855 4.22165 15.7784C4.51455 16.0713 4.98942 16.0713 5.28231 15.7784L10 11.0607L14.7216 15.7823C15.0145 16.0752 15.4894 16.0752 15.7823 15.7823C16.0752 15.4894 16.0752 15.0145 15.7823 14.7216L11.0607 10L15.783 5.27764Z"
              ></path>
            </svg>
          </button>
        </div>
        <Text className={styles.title} as="h4" text="Telefon raqamini kiriting" />
        <Text className={styles.subTitle} as="p" text="Tasdiqlash kodini Sms orqali yuboramiz" />
        <PatternFormat
          autoFocus
          className={styles.input}
          allowEmptyFormatting
          format="+998 ## ### ## ##"
        />
        <button onClick={close} className={styles.btn}>
          Kodni olish
        </button>
        <Text
          as="p"
          className={styles.text}
        >{`Avtotizatsiyadan o'tish orqali siz shaxsiy ma'lumotlarni qayta ishlash siyosatiga rozilik bildirasiz`}</Text>
      </div>
    </div>
  );
};
