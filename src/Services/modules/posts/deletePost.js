import { API } from '@/Utils/Constants';

export default (build) =>
  build.query({
    query: (id) => {
      return {
        url: `${API.POST.posts}/${id}`,
        method: 'DELETE',
      };
    },
  });
