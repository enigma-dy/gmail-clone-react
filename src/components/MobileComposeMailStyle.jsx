import styled from "styled-components";

export const ComposeMailWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  max-width: 600px;
  background: white;
  border-radius: 12px 12px 0 0;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.2);
  padding: 10px;
  z-index: 1000;
`;

export const TitleStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  font-weight: bold;
  font-size: 1rem;
  border-bottom: 1px solid #ddd;
`;

export const CloseIcon = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  color: #5f6368;
`;

export const ComposeForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #ddd;
  gap: 8px;

  label {
    font-size: 0.9rem;
    color: #5f6368;
  }
`;

export const InputField = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 0.9rem;
`;

export const MailContent = styled.textarea`
  width: 100%;
  height: 120px;
  border: none;
  outline: none;
  resize: none;
  font-size: 1rem;
  padding: 10px;
`;
export const FooterGroup = styled.div`
  position: absolute;
  bottom: 0;
`;
export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-top: 1px solid #ddd;
`;

export const SendButton = styled.button`
  background: #1a73e8;
  color: white;
  border: none;
  border-radius: 18px;
  padding: 8px 16px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #1558c6;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const Icon = styled.div`
  font-size: 1.3rem;
  color: #5f6368;
  cursor: pointer;

  &:hover {
    color: #1a73e8;
  }
`;
