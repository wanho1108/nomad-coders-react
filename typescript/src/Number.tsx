import React from "react";
import styled from "styled-components";

const Container = styled.span<{ isRed: boolean }>`
  color: ${(props) => (props.isRed ? "red" : "black")};
`;

interface IProps {
  count: number;
}

const Number: React.FunctionComponent<IProps> = ({ count }) => (
  <Container isRed={count > 10}>{count}</Container>
);

export default Number;
