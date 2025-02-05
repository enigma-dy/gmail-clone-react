import styled from "styled-components";

export const SelectionOptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 8px 16px;
`;

export const Icon = styled.div`
  font-size: 24px;
  color: #5f6368;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #1a73e8;
  }
`;

export const OptionListContainer = styled.div`
  position: absolute;
  top: 18px;
  left: 10px;
  padding: 16px;
  background-color: #ffffff;
  border: 1px solid #dadce0;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  width: 300px;
`;

export const OptionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  color: #202124;
  font-size: 14px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f1f3f4;
  }
`;

export const AdvancedToolbar = styled.p`
  margin-top: 12px;
  color: #1a73e8;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: #174ea6;
  }
`;
