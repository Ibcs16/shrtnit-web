import { ClickRow, Container } from './styles';

import React from 'react';
import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';

export default function ClickList({ clicks }) {
  // translations
  const [t, i18n] = useTranslation();

  // return table listing all clicks
  return (
    <Container>
      <thead>
        <tr>
          <th>{t('translation:analytics.accesses-table-header.Name')}</th>
          <th>IP</th>
          <th>{t('translation:analytics.accesses-table-header.Country')}</th>
          <th>{t('translation:analytics.accesses-table-header.Browser')}</th>
          <th>{t('translation:analytics.accesses-table-header.Date')}</th>
        </tr>
      </thead>
      <tbody>
        {clicks.map(item => (
          <ClickRow key={clicks.indexOf(item)}>
            <td>
              {item.name ||
                t('translation:analytics.accesses-table-content.Unknown')}
            </td>
            <td>{item.ip}</td>
            <td>{item.country.code}</td>
            <td>{item.browser}</td>
            <td>{format(new Date(item.date), t('translation:format.date'))}</td>
          </ClickRow>
        ))}
      </tbody>
    </Container>
  );
}
