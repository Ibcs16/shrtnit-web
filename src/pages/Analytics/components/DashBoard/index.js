import { Bar, Doughnut, Line } from 'react-chartjs-2';

import { Container } from './styles';
import React from 'react';
import { useTranslation } from 'react-i18next';

// import { Container } from './styles';

export default function Dashboard({ clicks }) {
  const [t, i18n] = useTranslation();

  // accesses from chrome browser
  const chrome = clicks.reduce((accumulator, click) => {
    return click.browser === 'Chrome' ? accumulator + 1 : accumulator;
  }, 0);

  // accesses from mozilla browser
  const mozilla = clicks.reduce((accumulator, click) => {
    return click.browser === 'Firefox' ? accumulator + 1 : accumulator;
  }, 0);

  // accesses from edge browser
  const edge = clicks.reduce((accumulator, click) => {
    return click.browser === 'Edge' ? accumulator + 1 : accumulator;
  }, 0);

  // accesses from other browsers
  const others = clicks.reduce((accumulator, click) => {
    return click.browser === 'UNKNOWN' ? accumulator + 1 : accumulator;
  }, 0);

  // global acceses and url accesses chart data
  const data = {
    labels: ['1', '2', '3', '4', '5'],
    datasets: [
      {
        label: 'Overall accesses',
        backgroundColor: 'rgb(4, 211, 97)',
        data: [7, 2, 4, 21, 2, 5, 9],
      },
      {
        label: 'Accesses to this URL',
        backgroundColor: 'rgb(5, 111, 67)',
        data: [1, 2, 3, 4, 5, 8, 7],
      },
    ],
  };

  // browsers accesses comparison chart data
  const dataBrowsers = {
    labels: ['Chrome', 'Firefox', 'Edge', 'Others'],
    datasets: [
      {
        data: [chrome, mozilla, edge, others],
        backgroundColor: [
          'rgba(255, 206, 86, 0.9)',
          'rgba(255, 159, 64, 0.9)',
          'rgba(54, 162, 235, 0.9)',
          'rgba(153, 102, 255, 0.9)',
        ],
      },
    ],
  };

  return (
    <>
      <Container>
        {clicks.length > 0 ? (
          <>
            <Line
              data={data}
              options={{
                responsive: false,
                maintainAspectRatio: true,
              }}
              width={600}
              height={200}
            />
            <Doughnut
              data={dataBrowsers}
              options={{
                responsive: false,
                maintainAspectRatio: true,
              }}
              width={300}
              height={200}
            />
          </>
        ) : (
          <div className="noAccesses">
            <span>{t('translation:analytics.noAccesses')}</span>
          </div>
        )}
      </Container>
    </>
  );
}
