import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { ReactElement, ReactNode } from 'react';

import { API_MOCKING } from '@/config/constants';
import { MSWWrapperProps } from '@/lib/msw';
import { AppProvider } from '@/providers/app';

if (API_MOCKING) {
  await import('@/testing/mocks/initialize');
}

const MSWWrapper = dynamic<MSWWrapperProps>(() =>
  import('@/lib/msw').then(({ MSWWrapper }) => MSWWrapper)
);

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

  const pageContent = getLayout(<Component {...pageProps} />);

  return (
    <AppProvider>
      {API_MOCKING ? (
        <MSWWrapper>{pageContent}</MSWWrapper>
      ) : (
        pageContent
      )}
    </AppProvider>
  );
}
