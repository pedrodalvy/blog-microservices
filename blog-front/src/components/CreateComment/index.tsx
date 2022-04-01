import { CommentsContext } from 'contexts/CommentsContext';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import React, { useContext, useState } from 'react';

import * as S from './styles';

type CreateCommentProps = {
  postId: string;
};

const CreateComment = ({ postId }: CreateCommentProps) => {
  const [content, setContent] = useState('');
  const { comments, setComments } = useContext(CommentsContext);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const comment = await fetch(
      `http://localhost:3102/posts/${postId}/comments`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content }),
      }
    );

    setContent('');
    setComments([...comments, await comment.json()]);
  };

  return (
    <S.Wrapper onSubmit={onSubmit}>
      <div className="p-inputgroup shadow-2">
        <span className="p-float-label">
          <InputText
            id="input"
            className="p-inputtext p-inputtext-sm p-2 w-full border-400 border-right-none"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <label htmlFor="input">Create a new Comment</label>
        </span>

        <Button className="p-button-sm flex-shrink-0" label="Submint" />
      </div>
    </S.Wrapper>
  );
};

export default CreateComment;
