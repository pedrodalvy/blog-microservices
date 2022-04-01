import { PostsContext } from 'contexts/PostsContext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { InputTextarea } from 'primereact/inputtextarea';
import React, { useContext, useState } from 'react';

import * as S from './styles';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const { posts, setPosts } = useContext(PostsContext);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const post = await fetch('http://localhost:3101/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });

    setTitle('');
    setPosts([...posts, await post.json()]);
  };

  return (
    <S.Wrapper>
      <Card title="Create a new Post">
        <form onSubmit={onSubmit}>
          <InputTextarea
            className="w-full"
            autoResize
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <div className="flex justify-content-end mt-3">
            <Button label="Submit" className="p-button-raised p-button-sm" />
          </div>
        </form>
      </Card>
    </S.Wrapper>
  );
};

export default CreatePost;
