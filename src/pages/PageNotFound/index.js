import '../../styles/animations.css';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import api from '../../services/api';
import { Container } from './styles';

export default function PageNotFound() {
  const [t, i18n] = useTranslation();
  const [newUrl, setNewUrl] = useState();

  return (
    <Container>
      {/* <img src="" alt="Crush.it logo" /> */}
      <header>{/* crush.it icon */}</header>
      <h1>
        404 <strong>{t('translation:page-not-found:title')}</strong>
      </h1>
      <h4>{t('translation:page-not-found:error')}</h4>
    </Container>
  );
}
