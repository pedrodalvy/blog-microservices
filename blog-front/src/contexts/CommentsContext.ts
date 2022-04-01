import { CommentProps } from 'components/Comment';
import { createContext } from 'react';

type CommentsContextType = {
  comments: CommentProps[];
  setComments: (posts: CommentProps[]) => void;
};

export const CommentsContext = createContext<CommentsContextType>({
  comments: [],
  setComments: () => ({}),
});
