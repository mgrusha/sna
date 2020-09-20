import styled from "styled-components";
import React from "react";
import { PostHeader } from "./PostHeader";
import { PostText } from "./PostText";
import { PostComments } from "./PostComments";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  padding: 1rem;
  border: 1px solid grey;
  border-radius: 10px;
`;

export const Post = ({ userName, date, text, comments }) => {
  return (
    <PostContainer>
      <PostHeader userName={userName} date={date} />
      <PostText text={text} />
      <PostComments comments={comments} />
    </PostContainer>
  );
};
