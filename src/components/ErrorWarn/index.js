import '../../styles/animations.css';

// import {useSpring, animated} from 'react-spring';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from './styles';

export default function ErrorWarn({ message, fadeAnimation }) {
  const [t, i18n] = useTranslation();
  return (
    <Container style={fadeAnimation}>
      <span>{t(`translation:error.${message}`)}</span>
    </Container>
  );
}
