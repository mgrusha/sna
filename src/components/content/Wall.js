import styled from "styled-components";
import React from "react";
import posts from "../../mockedData/posts.json";
import { Post } from "./post/Post";

const WallContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 0 auto;
`;

export const Wall = () => {
  return (
    <WallContainer>
      {posts
        .sort((a, b) => b.timeStamp - a.timeStamp)
        .map((post) => (
          <Post
            key={post.postId}
            userName={post.userName}
            date={post.timeStamp}
            text={post.text}
            comments={post.comments}
          />
        ))}
    </WallContainer>
  );
};
