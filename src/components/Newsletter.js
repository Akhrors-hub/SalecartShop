import React from "react";
import styled from "styled-components";
import { BiSend } from "react-icons/bi";

const Container = styled.div`
  background-color: #fff5f5;
  height: 60vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: purple;

  &:hover {
    background-color: purple;
    color: white;
  }

  flex: 1;
`;
const Input = styled.input`
  border: none;
  outline: none;
  flex: 8;
  padding-left: 20px;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title> Newsletter </Title>
      <Description>Get timely updates from your products</Description>
      <InputContainer>
        <Input />
        <Button>
          <BiSend />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
