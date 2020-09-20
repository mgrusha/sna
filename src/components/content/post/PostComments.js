import styled from "styled-components";
import React from "react";

const PostCommentsHolder = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
`;

const CommentHolder = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentAuthor = styled.span`
  font-weight: 700;
`;

export const PostComments = ({ comments }) => {
  return (
    <PostCommentsHolder>
      {comments.map((comment) => (
        <CommentHolder key={comment.id}>
          <CommentAuthor>{comment.author}</CommentAuthor>
          {comment.text}
        </CommentHolder>
      ))}
    </PostCommentsHolder>
  );
};
