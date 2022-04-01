import Comment, { CommentProps } from 'components/Comment';
import CreateComment from 'components/CreateComment';
import { CommentsContext } from 'contexts/CommentsContext';
import { useState } from 'react';

import * as S from './styles';

export type CommentsListProps = {
  postId: string;
  comments: CommentProps[];
};

const CommentsList = (props: CommentsListProps) => {
  const [comments, setComments] = useState(props.comments);

  return (
    <CommentsContext.Provider value={{ comments, setComments }}>
      <S.Wrapper className="list-none p-0 m-0 flex-grow-1">
        {comments?.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}

        <div className="mt-4 w-12">
          <CreateComment postId={props.postId} />
        </div>
      </S.Wrapper>
    </CommentsContext.Provider>
  );
};

export default CommentsList;
