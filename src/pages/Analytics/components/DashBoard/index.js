import { Bar, Doughnut, Line } from 'react-chartjs-2';

import { Container } from './styles';
import React from 'react';
import { useTranslation } from 'react-i18next';

// import { Container } from './styles';

export default function Dashboard({ clicks, lastDayClicks }) {
  const [t, i18n] = useTranslation();
  console.log(clicks, lastDayClicks);
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
    labels: ['-7d', '-6d', '-4d', '-3d', '2d', '-1d', 'Current'],
    datasets: [
      {
        label: 'Accesses to this URL',
        backgroundColor: 'rgb(5, 111, 67)',
        data: [
          lastDayClicks[6][1],
          lastDayClicks[5][1],
          lastDayClicks[4][1],
          lastDayClicks[5][1],
          lastDayClicks[2][1],
          lastDayClicks[1][1],
          lastDayClicks[0][1],
        ],
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
