import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components";

const HeaderText = styled.h6`
  font-size: 1.5rem;
  margin: 0;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

export default function Header() {
  return (
    <AppBar position="static">
      <StyledToolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <HeaderText>Posts</HeaderText>
        <Button color="inherit">Login</Button>
      </StyledToolbar>
    </AppBar>
  );
}
