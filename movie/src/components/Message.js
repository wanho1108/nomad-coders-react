import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const Text = styled.span`
  color: ${(prop) => prop.color};
`;

const Message = ({ text, color }) => (
  <Container>
    <Text color={color}>{text}</Text>
  </Container>
);

Message.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Message;
