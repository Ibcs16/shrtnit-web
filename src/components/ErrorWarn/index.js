import React from "react";
import { Container } from "./styles";

import "../../styles/animations.css";

export default function ErrorWarn({ message }) {
  return (
    <Container>
      <span>{message}</span>
    </Container>
  );
}
