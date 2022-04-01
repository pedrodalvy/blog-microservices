import * as S from './styles';

export type CommentProps = {
  id: string;
  content: string;
  status: 'pending' | 'approved' | 'rejected';
};

const Comment = ({ content, status }: CommentProps) => {
  if (status === 'pending') {
    return (
      <S.Wrapper className="flex align-items-center mb-3 ml-4 text-600">
        <i className="pi pi-comment mr-2 " />
        <span className="font-italic">
          This comment is awaiting moderation.
        </span>
      </S.Wrapper>
    );
  }

  if (status === 'rejected') {
    return (
      <S.Rejected className="flex align-items-center mb-3 ml-4">
        <i className="pi pi-comment mr-2 " />
        <span>This comment has been rejected.</span>
      </S.Rejected>
    );
  }

  return (
    <S.Wrapper className="flex align-items-center mb-3 ml-4">
      <i className="pi pi-comment text-primary mr-2" />
      <span>{content}</span>
    </S.Wrapper>
  );
};

export default Comment;
