import { API } from '@/Utils/Constants';

export default (build) =>
  build.query({
    query: () => {
      return {
        url: `${API.POST.posts}`,
        method: 'GET',
      };
    },
  });
