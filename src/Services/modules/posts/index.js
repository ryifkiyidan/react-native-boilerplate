import { api } from '@/Services/api';
import getPosts from './getPosts';
import getPost from './getPost';
import addPost from './addPost';
import updatePost from './updatePost';
import deletePost from './deletePost';

export const postApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPosts: getPosts(build),
    getPost: getPost(build),
    addPost: addPost(build),
    updatePost: updatePost(build),
    deletePost: deletePost(build),
  }),
  overrideExisting: true,
});

export const { useLazyFetchPostQuery } = postApi;
