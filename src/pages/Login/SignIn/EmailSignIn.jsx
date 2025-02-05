import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setEmail } from "../../../services/features/authSlice"; // Ensure this action exists

import {
  GoogleIcon,
  HeaderTitle,
  HeaderSubtitle,
  EmailInput,
  ForgotLink,
  InfoText,
  LearnMore,
  CreateAccountLink,
  NextButton,
  Container,
  Header,
  Main,
  InputContainer,
  ActionContainer,
} from "../LoginStyled";

export default function SignIn() {
  const [email, setEmailState] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNext = () => {
    if (email) {
      dispatch(setEmail(email));
      navigate("/password");
    } else {
      alert("Please enter your email");
    }
  };

  return (
    <Container>
      <Header>
        <GoogleIcon />
        <HeaderTitle>Sign in</HeaderTitle>
        <HeaderSubtitle>to continue to Gmail</HeaderSubtitle>
      </Header>
      <Main>
        <InputContainer>
          <EmailInput
            type="email"
            placeholder="Email or phone"
            value={email}
            onChange={(e) => setEmailState(e.target.value)}
          />
          <ForgotLink>Forgot email?</ForgotLink>
        </InputContainer>
        <InfoText>
          Not your computer? Use Guest mode to sign in privately.{" "}
          <LearnMore>Learn more</LearnMore>
        </InfoText>
        <ActionContainer>
          <CreateAccountLink href="#">Create account</CreateAccountLink>
          <NextButton onClick={handleNext}>Next</NextButton>
        </ActionContainer>
      </Main>
    </Container>
  );
}
