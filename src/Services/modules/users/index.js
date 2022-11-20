import { api } from '@/Services/api';
import fetchUser from './fetchUser';

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    fetchUser: fetchUser(build),
  }),
  overrideExisting: true,
});

export const { useLazyFetchUserQuery } = userApi;
