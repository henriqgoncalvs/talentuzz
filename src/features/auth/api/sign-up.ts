import { useMutation } from '@tanstack/react-query';

import { apiClient } from '@/lib/api-client';
import { notificationsStore } from '@/stores/notifications';

import { SignUpData } from '../types';

export const signup = (data: SignUpData) => {
  return apiClient.post('/auth/signup', data);
};

type UseSignUpOptions = {
  onSuccess?: () => void;
};

export const useSignUp = ({
  onSuccess,
}: UseSignUpOptions = {}) => {
  const { mutate: submit, isLoading } = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      notificationsStore.getState().showNotification({
        type: 'success',
        title: 'Account created',
        duration: 5000,
        message: 'Login to your account!',
      });

      onSuccess?.();
    },
  });

  return { submit, isLoading };
};
