import Axios from 'axios';
import Cookies from 'js-cookie';

import { API_URL } from '@/config/constants';
import { notificationsStore } from '@/stores/notifications';

export const apiClient = Axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const token = Cookies.get('access_token');

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
});

apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message =
      error.response?.data?.message || error.message;

    if (error.response?.status !== 401) {
      notificationsStore.getState().showNotification({
        type: 'error',
        title: 'Error',
        duration: 5000,
        message,
      });
    }

    return Promise.reject(error.response);
  }
);
