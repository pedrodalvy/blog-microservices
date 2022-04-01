import CreatePost from 'components/CreatePost';
import PostsList, { PostProps } from 'components/PostsList';
import { PostsContext } from 'contexts/PostsContext';
import { useState } from 'react';
import * as S from 'templates/HomeTemplate/styles';

export type HomeTemplatePops = {
  posts: PostProps[];
};

const HomeTemplate = (props: HomeTemplatePops) => {
  const [posts, setPosts] = useState(props.posts);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      <S.Wrapper className="flex flex-column align-items-center">
        <div className="mt-4 w-12 lg:w-6">
          <CreatePost />
        </div>

        <div className="mt-4 w-12 lg:w-6">
          <PostsList posts={posts} />
        </div>
      </S.Wrapper>
    </PostsContext.Provider>
  );
};

export default HomeTemplate;
