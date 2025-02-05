import styled from "styled-components";

export const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  font-family: Arial, sans-serif;
  width: 100%;
  height: 20px;
`;

export const ActionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const SelectContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;

  input {
    margin: 0;
    cursor: pointer;
  }
`;
export const Check = styled.div`
  position: absolute;
  top: 18px;
  left: 12px;
`;

export const Icon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
  color: #5f6368;

  &:hover {
    color: #202124;
  }
`;

export const PaginationRow = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;
