import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux"; // Get email from Redux
import { useNavigate } from "react-router";
import { useLoginMutation } from "../../../services/gmailService"; // Using the login mutation
import {
  GoogleIcon,
  HeaderTitle,
  HeaderSubtitle,
  PasswordInput,
  ShowPassword,
  CreateAccountLink,
  NextButton,
  Container,
  Header,
  Main,
  InputContainer,
  ActionContainer,
} from "../LoginStyled";

export default function Password() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const email = useSelector((state) => state.auth.email);
  const navigate = useNavigate();

  const [login, { isLoading, error }] = useLoginMutation();

  useEffect(() => {
    if (!email) {
      navigate("/login");
    }
  }, [email, navigate]);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    if (password) {
      try {
        const result = await login({ email, password }).unwrap();
        console.log("Login successful:", result);
        navigate("/dashboard");
      } catch (err) {
        console.error("Login failed:", err);
        alert("Login failed. Please try again.");
      }
    } else {
      alert("Please enter your password");
    }
  };

  if (!email) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Header>
        <GoogleIcon />
        <HeaderTitle>Welcome</HeaderTitle>
        <HeaderSubtitle>{email}</HeaderSubtitle>
      </Header>
      <Main>
        <InputContainer>
          <PasswordInput
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ShowPassword onClick={handleTogglePassword}>
            {showPassword ? "Hide password" : "Show password"}
          </ShowPassword>
        </InputContainer>

        <ActionContainer>
          <CreateAccountLink href="#">Try another way</CreateAccountLink>
          <NextButton onClick={handleLogin} disabled={isLoading}>
            {isLoading ? "Logging in..." : "Next"}
          </NextButton>
        </ActionContainer>
      </Main>
      {error && <p>Error: {error.data?.message || "Something went wrong"}</p>}
    </Container>
  );
}
