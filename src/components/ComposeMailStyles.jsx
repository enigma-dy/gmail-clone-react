import styled from "styled-components";

export const ComposeMailWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  right: 80px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  font-family: Arial, sans-serif;
  overflow: hidden;
`;
export const TitleStyled = styled.h1`
  padding: 10px;
  font-size: 15px;
  background-color: #f2f6fc;
  letter-spacing: 1px;
`;

export const ComposeForm = styled.form`
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  &:focus {
    border: none;
    outline: none;
  }
`;
export const CloseIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
`;
export const InputGroup = styled.div`
  display: flex;
  padding: 0px 10px;
  align-items: center;
  &:focus {
    border: none;
    outline: none;
  }
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  font-size: 14px;
  &:focus {
    border: none;
    outline: none;
  }
`;

export const MailContent = styled.textarea`
  width: 100%;
  height: 300px;
  border: none;
  &:focus {
    border: none;
    outline: none;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  &:focus {
    border: none;
    outline: none;
  }
`;

export const SendButton = styled.button`
  padding: 10px 20px;
  background-color: #0078d4;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #005a9e;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const Icon = styled.div`
  font-size: 20px;
  cursor: pointer;
  color: #0078d4;

  &:hover {
    color: #005a9e;
  }
`;
