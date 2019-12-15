import '../../styles/animations.css';

import React from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from './styles';

export default function ErrorWarn({ message }) {
  const [t, i18n] = useTranslation();
  return (
    <Container>
      <span>{t(`translation:error.${message}`)}</span>
    </Container>
  );
}
