import React from 'react';

import styles from './MobileHeader.module.scss';

export const MobileHeader = () => {
  return (
    <div className={styles.mobileHeader}>
      <div className={styles.rightPanel}>
        <button className={styles.toggle}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000"
            id="nav-humb"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3 5.75C3 5.33579 3.33579 5 3.75 5H20.25C20.6642 5 21 5.33579 21 5.75C21 6.16421 20.6642 6.5 20.25 6.5H3.75C3.33579 6.5 3 6.16421 3 5.75ZM3 12C3 11.5858 3.33579 11.25 3.75 11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H3.75C3.33579 12.75 3 12.4142 3 12ZM3.75 17.5C3.33579 17.5 3 17.8358 3 18.25C3 18.6642 3.33579 19 3.75 19H20.25C20.6642 19 21 18.6642 21 18.25C21 17.8358 20.6642 17.5 20.25 17.5H3.75Z"
            ></path>
          </svg>
        </button>
        <h2>Shopping</h2>
      </div>
      <div className={styles.leftPanel}>Profile</div>
    </div>
  );
};
