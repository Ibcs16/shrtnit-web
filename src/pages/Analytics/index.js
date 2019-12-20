import '../../styles/animations.css';

import { fomat } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoMdArrowBack } from 'react-icons/io';

import api from '../../services/api';
import ClicksTable from './components/ClicksTable';
import DashBoard from './components/DashBoard';
import { Container } from './styles';

export default function Analytics({ history }) {
  // code from url parameter
  const [_, __, code] = history.location.pathname.split('/');

  const [t, i18n] = useTranslation();
  const [data, setData] = useState([]);
  const [url, setUrl] = useState({
    shortUrl: `${process.env.REACT_APP_BASE_URL}/${code}`,
    analytics: {
      accesses: [],
    },
  });

  // loads analytics from server once page is loaded
  useEffect(() => {
    async function getAnalytics(code_) {
      const res = await api.get(
        `${process.env.REACT_APP_API_URL}/analytics/${code_}`
      );

      if (res.status === 200) {
        setUrl({ ...res.data });
      }
    }

    getAnalytics(code);
  }, [code]);

  return (
    <Container>
      <header>
        <div>
          <IoMdArrowBack onClick={history.goBack} size={32} />
          <h1>{url.shortUrl}</h1>
        </div>
        <div>
          <h2>{/* crush<strong>.it</strong> */}</h2>
        </div>
      </header>
      <main>
        <div>
          <h1>{t('translation:analytics.title')}</h1>
          <span />
          <p>{t('translation:analytics.subtitle')}</p>
        </div>
        <section id="charts">
          <h1>{t('translation:analytics.charts')}</h1>
          <DashBoard clicks={url.analytics.accesses} />
        </section>
        <section id="clicks">
          <h1>{t('translation:analytics.accesses')}</h1>
          <ClicksTable clicks={url.analytics.accesses} />
        </section>
      </main>
    </Container>
  );
}
