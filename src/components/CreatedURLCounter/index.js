import '../../styles/animations.css';

import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Container } from './styles';

export default function CreatedURLCounter({ numberOfURLs }) {
  const { t, i18n } = useTranslation();

  return (
    <Container className="incomingURLCounter">
      <strong>{numberOfURLs}</strong> {t('translation:shortened')}
    </Container>
  );
}
