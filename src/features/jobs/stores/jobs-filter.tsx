import { useStore } from 'zustand';
import { createStore } from 'zustand/vanilla';

import { getQueryParams } from '@/utils/get-query-params';

import { JobFilters } from '../types';

export type JobsFilterStore = {
  filters: JobFilters | null;
  addFilter: (
    filterKey: keyof JobFilters,
    value: JobFilters[keyof JobFilters]
  ) => void;
  initFilters: () => void;
};

export const jobsFiltersStore = createStore<JobsFilterStore>(
  (set, get) => ({
    filters: null,
    addFilter: (filterKey, value) => {
      const url = new URL(window.location.href);
      const searchParams = new URLSearchParams();
      const nextFilters = {
        ...get().filters,
        [filterKey]: value,
      };

      Object.entries(nextFilters).forEach(([key, value]) => {
        (value as string[]).forEach((v) =>
          searchParams.append(key, v)
        );
      });

      url.search = searchParams.toString();

      window.history.pushState({}, '', url.toString());

      set((state) => ({
        filters: {
          ...state.filters,
          [filterKey]: value,
        },
      }));
    },
    initFilters: () => {
      const params = getQueryParams();

      set({ filters: params });
    },
  })
);

export const useJobsFilters = () => useStore(jobsFiltersStore);
