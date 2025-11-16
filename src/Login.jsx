import React from "react";
import styled, { useTheme } from "styled-components";
import darklogo from "../public/darklogo.png";
import lightlogo from "../public/logog.png";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  background: ${(p) => p.theme.bg};
  color: ${(p) => p.theme.text};
  transition: 0.3s ease;

  @media (max-width: 600px) {
    padding: 20px;
    height: auto;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 30px;
  color: ${(p) => p.theme.cardTitle};
  transition: 0.3s ease;

  @media (max-width: 600px) {
    font-size: 26px;
    margin-bottom: 20px;
  }
`;

const Card = styled.div`
  background: ${(p) => p.theme.cardBg};
  width: 450px;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0px 2px 14px ${(p) => p.theme.cardShadow};
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: 0.3s ease;

  @media (max-width: 600px) {
    width: 90%;
    padding: 25px;
    gap: 15px;
  }
`;

const LogoWrapper = styled.div`
  text-align: center;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    margin-bottom: 5px;
  }
`;

const LogoText = styled.div`
  margin-top: 4px;
  font-weight: bold;
  font-size: 18px;
  color: ${(p) => p.theme.text};
  transition: 0.3s ease;

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

const Logo = styled.img`
  width: 100px;

  @media (max-width: 600px) {
    width: 75px;
  }
`;

const Input = styled.input`
  padding: 12px 14px;
  border-radius: 6px;
  font-size: 16px;
  background: ${(p) => p.theme.inputBg};
  border: 1px solid ${(p) => p.theme.inputBorder};
  color: ${(p) => p.theme.inputText};
  transition: 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 10px 12px;
  }
`;

const Button = styled.button`
  padding: 12px;
  width: 100%;
  background: ${(p) => p.theme.buttonBg};
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: ${(p) => p.theme.buttonHover};
  }

  @media (max-width: 600px) {
    font-size: 16px;
    padding: 10px;
  }
`;
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: block;
  width: 100%;
  text-align: center;
`;
const Login = () => {
  const theme = useTheme();

  return (
    <Wrapper>
      <Title>Tizimga Kirish</Title>

      <Card>
        <LogoWrapper>
          <Logo
            src={theme.bg === "#121212" ? lightlogo : darklogo}
            alt="Elektron Kundalik"
          />
          <LogoText>ELEKTRON KUNDALIK</LogoText>
        </LogoWrapper>

        <Input placeholder="Login" />
        <Input type="password" placeholder="******" />

        <Button>
          <StyledLink to="/home">Kirish</StyledLink>
        </Button>
      </Card>
    </Wrapper>
  );
};

export default Login;
