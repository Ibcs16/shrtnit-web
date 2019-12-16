import '../../styles/animations.css';

import React, { useEffect, useState } from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { useTranslation } from 'react-i18next';
import { IoMdArrowBack } from 'react-icons/io';

import api from '../../services/api';
import ClicksTable from './components/ClicksTable';
import { Container } from './styles';

export default function Analytics({ history }) {
  const [t, i18n] = useTranslation();
  const [incomingURLS, setIncomingURLS] = useState({});
  const [data, setData] = useState([]);
  const [url, setUrl] = useState({
    shortUrl: 'https://crush.it/bmw3uV',
    analytics: {
      accesses: [],
    },
  });

  useEffect(() => {
    async function getAnalytics(code) {
      const res = await api.get(`${process.env.API_URL}/analytics/${code}`);

      if (res.status === 200) {
        setData(res.data);
      }
    }
    setData({
      labels: ['1', '2', '3', '4', '5'],
      datasets: [
        {
          label: 'Videos',
          backgroundColor: 'rgb(4, 211, 97)',
          data: [7, 2, 4, 21, 2, 5, 9],
        },
        {
          label: 'Views',
          backgroundColor: 'rgb(5, 111, 67)',
          data: [1, 2, 3, 4, 5, 8, 7],
        },
      ],
    });

    getAnalytics('code');

    // getAnalytics(history.getParam("code"));
  }, []);

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

          <div>
            <Line
              data={data}
              options={{
                responsive: false,
                maintainAspectRatio: false,
              }}
              width={600}
              height={200}
            />
            {/* <Line
              data={[]}
              options={{ responsive: true, maintainAspectRatio: false }}
            />
            <Line
              data={[]}
              options={{ responsive: true, maintainAspectRatio: false }}
            /> */}
          </div>
        </section>
        <section id="clicks">
          <h1>{t('translation:analytics.accesses')}</h1>
          <ClicksTable clicks={url.analytics.accesses} />
        </section>
      </main>
    </Container>
  );
}
