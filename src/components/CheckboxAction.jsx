import React from "react";
import styled from "styled-components";

const Container = styled.div`
  /* position: absolute; */
  background-color: white;
  width: 200px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 8px 12px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  padding: 8px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background-color: #f1f3f4;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }

  &.selected {
    background-color: #e8f0fe;
    color: #1a73e8;
  }
`;

function CheckBoxAction() {
  return (
    <Container>
      <List>
        <ListItem>All</ListItem>
        <ListItem>None</ListItem>
        <ListItem>Read</ListItem>
        <ListItem>Unread</ListItem>
        <ListItem>Starred</ListItem>
        <ListItem>Unstarred</ListItem>
      </List>
    </Container>
  );
}

export default CheckBoxAction;
