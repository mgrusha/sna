import styled from "styled-components";
import React, { useState } from "react";
import { PostHeader } from "./PostHeader";
import { PostText } from "./PostText";
import { PostComments } from "./PostComments";
import TextField from "@material-ui/core/TextField";

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  padding: 1rem;
  border: 1px solid grey;
  border-radius: 10px;
`;

const AddPostComment = styled(TextField)`
  margin: 0.7rem 0;
  && {
    font-size: 1rem;
  }
`;

export const Post = ({ userName, date, text, comments }) => {
  const [innerComments, setInnerComments] = useState(comments);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      setInnerComments([
        ...innerComments,
        {
          author: "Anonymus",
          text: inputValue,
        },
      ]);
      setInputValue("");
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <PostContainer>
      <PostHeader userName={userName} date={date} />
      <PostText text={text} />
      <PostComments comments={innerComments} />
      <AddPostComment
        placeholder="Add comment"
        multiline
        variant="outlined"
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        value={inputValue}
      />
    </PostContainer>
  );
};
