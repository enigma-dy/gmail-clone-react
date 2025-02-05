import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 240px;
  padding: 16px 8px;
  background-color: #f7f9fc;
  height: 100%;
  overflow: hidden;
`;
export const CollapseSidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  gap: 50px;
  width: 20px;
`;
export const ComposeIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a73e8;
  color: white;
  font-weight: 500;
  font-size: 14px;
  padding: 12px 16px;
  border-radius: 24px;
  margin-bottom: 16px;
  cursor: pointer;

  svg {
    margin-right: 8px;
  }

  &:hover {
    background-color: #185abc;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  color: #5f6368;
  font-size: 14px;
  font-weight: 400;
  padding: 8px 12px;
  border-radius: 24px;
  margin-bottom: 8px;
  cursor: pointer;

  svg {
    font-size: 20px;
  }

  &:hover {
    background-color: #f5f5f5;
    color: #202124;
  }

  span {
    flex-grow: 1;
  }
`;

export const SectionDivider = styled.div`
  height: 1px;
  background-color: #ddd;
  margin: 8px 0;
`;
