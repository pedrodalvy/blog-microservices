import { PostProps } from 'components/PostsList';
import { createContext } from 'react';

type PostsContextType = {
  posts: PostProps[];
  setPosts: (posts: PostProps[]) => void;
};

export const PostsContext = createContext<PostsContextType>({
  posts: [],
  setPosts: () => ({}),
});
