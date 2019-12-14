import '../../styles/animations.css';

import React from 'react';

import { Container } from './styles';

export default function ErrorWarn({ message }) {
  return (
    <Container>
      <span>{message}</span>
    </Container>
  );
}
