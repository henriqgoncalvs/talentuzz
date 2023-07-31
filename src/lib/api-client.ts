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
  async (error) => {
    const message =
      error.response?.data?.message || error.message;
    const refresh = Cookies.get('refresh_token');

    if (error.response?.data.statusCode === 401) {
      if (refresh) {
        try {
          const response = await Axios.post<{
            access_token: string;
          }>(
            `${API_URL}/auth/refresh`,
            {},
            {
              headers: {
                Authorization: `Bearer ${refresh}`,
              },
            }
          );

          Cookies.set(
            'access_token',
            response.data.access_token
          );

          return apiClient.request(error.config);
        } catch {
          notificationsStore.getState().showNotification({
            type: 'error',
            title: 'Error',
            duration: 5000,
            message,
          });

          return Promise.reject(error.response);
        }
      }

      if (error?.response?.config.url !== '/auth/me') {
        notificationsStore.getState().showNotification({
          type: 'error',
          title: 'Error',
          duration: 5000,
          message,
        });
      }

      return Promise.reject(error.response);
    }
  }
);
