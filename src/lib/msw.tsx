import { MSWDevTools } from 'msw-devtools';
import { ReactNode } from 'react';

import { API_MOCKING, IS_DEVELOPMENT } from '@/config/constants';
import { db, handlers } from '@/testing/mocks';

export type MSWWrapperProps = {
  children: ReactNode;
};

if (API_MOCKING) {
  await import('@/testing/mocks/initialize');
}

export const MSWWrapper = ({ children }: MSWWrapperProps) => {
  return (
    <>
      {IS_DEVELOPMENT && (
        <MSWDevTools db={db} handlers={handlers} />
      )}
      {children}
    </>
  );
};
