import styled from "styled-components";

export const LayoutStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  height: 100%;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const AppStyle = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;
`;
