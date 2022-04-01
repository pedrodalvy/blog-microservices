import { CommentProps } from 'components/Comment';
import CommentsList from 'components/CommentsList';
import { Accordion, AccordionTab } from 'primereact/accordion';

import * as S from './styles';

export type PostProps = {
  id: string;
  title: string;
  comments: CommentProps[];
};

export type PostsListProps = {
  posts: PostProps[];
};

const PostsList = ({ posts }: PostsListProps) => {
  const renderedPosts = posts.map((post) => (
    <AccordionTab key={post.id} header={post.title}>
      <CommentsList comments={post.comments} postId={post.id} />
    </AccordionTab>
  ));

  return (
    <S.Wrapper>
      <Accordion>{renderedPosts}</Accordion>
    </S.Wrapper>
  );
};

export default PostsList;
