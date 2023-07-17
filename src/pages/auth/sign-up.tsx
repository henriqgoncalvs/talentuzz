import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { Seo } from '@/components/seo';
import { SignUpForm } from '@/features/auth';
import { AuthLayout } from '@/layouts/auth-layout/auth-layout';

const SignUpPage = () => {
  const router = useRouter();

  const onSuccess = () => {
    const redirect = router.query.redirect as string;
    router.replace(redirect || '/auth/login');
  };

  return (
    <>
      <Seo title="Sign Up" />
      <SignUpForm onSuccess={onSuccess} />
    </>
  );
};

SignUpPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout title="Sign Up">{page}</AuthLayout>;
};

export default SignUpPage;
