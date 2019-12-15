import React from 'react';
import { useTranslation } from 'react-i18next';

import { ClickRow, Container } from './styles';

export default function ClickList({ clicks }) {
  const [t, i18n] = useTranslation();
  return (
    <Container>
      <thead>
        <tr>
          <th>IP</th>
          <th>{t('translation:analytics.accesses-table-header.Country')}</th>
          <th>{t('translation:analytics.accesses-table-header.Browser')}</th>
          <th>{t('translation:analytics.accesses-table-header.Date')}</th>
        </tr>
      </thead>
      <tbody>
        {clicks.map(item => (
          <ClickRow key={clicks.indexOf(item)}>
            <td>item.IP</td>
            <td>item.country</td>
            <td>item.browser</td>
            <td>item.date</td>
          </ClickRow>
        ))}
      </tbody>
    </Container>
  );
}
