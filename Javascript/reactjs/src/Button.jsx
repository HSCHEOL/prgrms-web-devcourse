import React from "react";
import styled from "styled-components";

const Container = styled.button`
  padding: 1em;
  margin: 5vw;
  color: ${(props) => (props.main ? "white" : "black")};
  background: ${(props) => (props.main ? "blue" : "white")};

  @media (max-width: 768px) {
    width: 100%;
    color: ${(props) => (props.main ? "black" : "white")};
    background: ${(props) => (props.main ? "lightblue" : "gray")};
    padding: 0.5em;
  }
`;

const Button = () => {
  return (
    <>
      <div style={{ background: "black", height: "200px" }}>
        <Container>버튼1</Container>
        <Container main>버튼2</Container>
      </div>
    </>
  );
};

export default Button;
