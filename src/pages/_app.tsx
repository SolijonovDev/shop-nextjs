import { Fragment } from 'react';
import { MainLayout } from '@/layouts';
import type { AppProps } from 'next/app';

import '@/styles/main.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Fragment>
  );
}
