import styled from "styled-components";

export const HomeLayout = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  height: 85%;

  @media (max-width: 768px) {
    border-radius: 0;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  outline: none;
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 10px auto;
  display: block;

  &:focus {
    border-color: #0073e6;
    box-shadow: 0 0 5px rgba(0, 115, 230, 0.5);
  }
`;
