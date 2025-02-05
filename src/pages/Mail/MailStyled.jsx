import styled from "styled-components";

export const MailContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #ffffff;
  overflow-y: auto;
`;

export const MailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.h2`
  font-size: 18px;
  color: #202124;
  margin: 0;
`;

export const MailList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MailItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  background-color: #f8f9fa;

  &:hover {
    background-color: #e8f0fe;
  }
`;

export const MailDetails = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const MailSender = styled.span`
  font-weight: bold;
  color: #202124;
  width: 200px;
`;

export const MailSubject = styled.span`
  font-size: 14px;
  color: #5f6368;
  flex: 1;
`;

export const MailSnippet = styled.span`
  font-size: 12px;
  color: #5f6368;
`;

export const MailTime = styled.span`
  font-size: 12px;
  color: #5f6368;
`;
