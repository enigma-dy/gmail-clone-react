import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  max-width: 800px;
  margin: 40px auto;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 20px;
`;

const GoogleIcon = styled(FcGoogle)`
  font-size: 60px;
  margin-bottom: 10px;
  color: #4285f4;
`;

const HeaderTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
`;

const HeaderSubtitle = styled.p`
  font-size: 16px;
  color: #666;
`;

const Main = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin-top: 50px;
  padding: 20px;
`;

const InputContainer = styled.div`
  margin-bottom: 20px;
`;

const EmailInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  outline: none;
  &:focus {
    border: 1px solid #aaa;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

const ForgotLink = styled.p`
  font-size: 14px;
  color: #1a73e8;
  margin-top: 5px;
  text-align: right;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const InfoText = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
`;

const LearnMore = styled.span`
  font-size: 14px;
  color: #1a73e8;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ActionContainer = styled.div`
  display: flex;
  gap: 50px;
  justify-content: end;
  align-items: center;
`;

const CreateAccountLink = styled.a`
  font-size: 14px;
  font-weight: bolder;
  color: #1a73e8;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const NextButton = styled.button`
  background-color: #1a73e8;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    background-color: #1565c0;
  }
`;

const PasswordInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  outline: none;
  transition: border 0.3s, box-shadow 0.3s;

  &:focus {
    border: 1px solid #1a73e8;
    box-shadow: 0 0 10px rgba(26, 115, 232, 0.4);
  }

  &::placeholder {
    color: #999;
  }
`;
const ShowPassword = styled.button`
  background: none;
  border: none;
  color: #1a73e8;
  font-size: 14px;
  cursor: pointer;
  margin-left: 10px;
  padding: 0;
  text-decoration: underline;
  outline: none;
  transition: color 0.3s;

  &:hover {
    color: #1565c0;
  }

  &:focus {
    outline: 1px dashed #1a73e8;
  }
`;

export {
  Container,
  Header,
  GoogleIcon,
  HeaderTitle,
  HeaderSubtitle,
  Main,
  InputContainer,
  EmailInput,
  ForgotLink,
  InfoText,
  LearnMore,
  ActionContainer,
  CreateAccountLink,
  NextButton,
  PasswordInput,
  ShowPassword,
};
