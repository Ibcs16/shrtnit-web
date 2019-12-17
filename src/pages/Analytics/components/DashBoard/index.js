import React from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';

// import { Container } from './styles';

export default function Dashboard({ clicks }) {
  const chrome = clicks.reduce((accumulator, click) => {
    return click.browser === 'Chrome' ? accumulator + 1 : accumulator;
  }, 0);

  const mozilla = clicks.reduce((accumulator, click) => {
    return click.browser === 'Mozilla' ? accumulator + 1 : accumulator;
  }, 0);

  const safari = clicks.reduce((accumulator, click) => {
    return click.browser === 'Safari' ? accumulator + 1 : accumulator;
  }, 0);

  const others = clicks.reduce((accumulator, click) => {
    return click.browser === '' ? accumulator + 1 : accumulator;
  }, 0);

  const data = {
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
  };

  const dataBrowsers = {
    labels: ['Chrome', 'Firefox', 'Safari', 'Others'],
    datasets: [
      {
        data: [chrome, mozilla, safari, others],
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
        <Doughnut
          data={dataBrowsers}
          options={{
            responsive: false,
            maintainAspectRatio: false,
          }}
          width={300}
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
    </>
  );
}
