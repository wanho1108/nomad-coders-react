import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 50px;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.8);
  color: #fff;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
`;

const Link = styled(RouterLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

export default () => (
  <Header>
    <List>
      <Item>
        <Link to="/">Movies</Link>
      </Item>
      <Item>
        <Link to="/tv">TV</Link>
      </Item>
      <Item>
        <Link to="/search">Search</Link>
      </Item>
    </List>
  </Header>
);
