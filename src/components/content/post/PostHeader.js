import React from "react";
import styled from "styled-components";

const PostHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.h4`
  font-weight: 700;
  margin: 0;
`;

const CommentDate = styled.p`
  font-weight: 300;
  font-style: italic;
`;

export const PostHeader = ({ userName, date }) => {
  return (
    <PostHeaderContainer>
      <UserName>{userName}</UserName>
      <CommentDate>
        {new Date(date * 1000).toLocaleDateString("pl-PL")}
      </CommentDate>
    </PostHeaderContainer>
  );
};
