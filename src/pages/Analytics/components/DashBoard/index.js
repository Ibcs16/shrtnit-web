import { Bar, Doughnut, Line } from 'react-chartjs-2';
import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import { useTranslation } from 'react-i18next';

// import { Container } from './styles';

export default function Dashboard({ clicks, lastSevenDaysClicks }) {
  const [t, i18n] = useTranslation();
  const [dataWeek, setDataWeek] = useState({});
  const [dataBrowsers, setDataBrowsers] = useState({});

  console.log(clicks, lastSevenDaysClicks);
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
  useEffect(() => {
    setDataWeek({
      labels: ['-7d', '-6d', '-4d', '-3d', '2d', '-1d', 'Current'],
      datasets: [
        {
          label: t('translation:analytics.label'),
          backgroundColor: 'rgb(4, 211, 97)',
          data: [
            lastSevenDaysClicks[6],
            lastSevenDaysClicks[5],
            lastSevenDaysClicks[4],
            lastSevenDaysClicks[3],
            lastSevenDaysClicks[2],
            lastSevenDaysClicks[1],
            lastSevenDaysClicks[0],
          ],
        },
      ],
    });

    setDataBrowsers({
      labels: ['Chrome', 'Firefox', 'Edge', t('translation:analytics.others')],
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
    });
  }, [lastSevenDaysClicks, i18n, t, chrome, mozilla, edge, others]);

  // browsers accesses comparison chart data

  return (
    <>
      <Container>
        {clicks.length > 0 ? (
          <>
            <Line
              data={dataWeek}
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
