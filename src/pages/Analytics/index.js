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
  // console.log(history);
  const [_, __, code] = history.location.pathname.split('/');
  console.log(code);

  const [t, i18n] = useTranslation();
  const [incomingURLS, setIncomingURLS] = useState({});
  const [data, setData] = useState([]);
  const [url, setUrl] = useState({
    shortUrl: `${process.env.REACT_APP_BASE_URL}/${code}`,
    analytics: {
      accesses: [
        {
          ip: '123.123',
          name: '',
          browser: 'Chrome',
          country: 'Brazil',
          date: Date.now(),
        },
        {
          ip: '222.555',
          name: 'duda',
          browser: 'Mozilla',
          country: 'Portugal',
          date: Date.now(),
        },
        {
          ip: '123.123',
          name: '',
          browser: 'Chrome',
          country: 'Brazil',
          date: Date.now(),
        },
        {
          ip: '222.555',
          name: 'duda',
          browser: 'Safari',
          country: 'Portugal',
          date: Date.now(),
        },
        {
          ip: '123.123',
          name: '',
          browser: 'Safari',
          country: 'Brazil',
          date: Date.now(),
        },
        {
          ip: '222.555',
          name: 'duda',
          browser: '',
          country: 'Portugal',
          date: Date.now(),
        },
      ],
    },
  });

  useEffect(() => {
    async function getAnalytics(code_) {
      const res = await api.get(
        `${process.env.REACT_APP_API_URL}/analytics/${code_}`
      );

      if (res.status === 200) {
        setUrl({ ...url, ...res.data, analytics: url.analytics });
      }
    }

    // setData({
    //   labels: ['1', '2', '3', '4', '5'],
    //   datasets: [
    //     {
    //       label: 'Videos',
    //       backgroundColor: 'rgb(4, 211, 97)',
    //       data: [7, 2, 4, 21, 2, 5, 9],
    //     },
    //     {
    //       label: 'Views',
    //       backgroundColor: 'rgb(5, 111, 67)',
    //       data: [1, 2, 3, 4, 5, 8, 7],
    //     },
    //   ],
    // });

    getAnalytics(code);

    // getAnalytics(history.getParam("code"));
  }, [code, url]);

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
