import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

import { AppProvider } from '@/providers/app';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({
  Component,
  pageProps,
}: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((component) => component);

  const pageContent = getLayout(
    <Component {...pageProps} />
  );

  return <AppProvider>{pageContent}</AppProvider>;
}
