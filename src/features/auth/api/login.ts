import { useMutation } from '@tanstack/react-query';
import Cookies from 'js-cookie';

import { apiClient } from '@/lib/api-client';
import { queryClient } from '@/lib/react-query';

import { AuthUser, LoginData } from '../types';

export const login = (
  data: LoginData
): Promise<{
  user: AuthUser;
  access_token: string;
  refresh_token: string;
}> => {
  return apiClient.post('/auth/login', data);
};

type UseLoginOptions = {
  onSuccess?: (user: AuthUser) => void;
};

export const useLogin = ({
  onSuccess,
}: UseLoginOptions = {}) => {
  const { mutate: submit, isLoading } = useMutation({
    mutationFn: login,
    onSuccess: ({ user, access_token, refresh_token }) => {
      const inFifteenMinutes = new Date(
        new Date().getTime() + 15 * 60 * 1000
      );

      Cookies.set('access_token', access_token, {
        expires: inFifteenMinutes,
      });
      Cookies.set('refresh_token', refresh_token, {
        expires: 7,
      });

      queryClient.setQueryData(['auth-user'], user);
      onSuccess?.(user);
    },
  });

  return { submit, isLoading };
};
