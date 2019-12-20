import React, { Link, Suspense, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import api from '../../services/api';

export default function Redirection({ history, match }) {
  const [t, i18n] = useTranslation();

  // shortUrl code to redirect to
  const { code } = match.params;

  useEffect(() => {
    // calls api for redirection and send user info
    async function redirectToPage(code_) {
      await api
        .put(`${process.env.REACT_APP_API_URL}/redirect/${code_}`, {
          info: {
            ip: '',
            browser: 'google',
            name: 'iago',
            country: 'London',
          },
          accessKey: '',
        })
        .then(response => {
          if (response.status === 200) {
            const { longUrl } = response.data;
            window.location.replace(longUrl);
          }
        })
        .catch(error => {
          // if gets any error
          if (error && error.response) {
            const { longUrl } = error.response.data;

            if (error.response.status === 404) {
              history.push('/page-not-found');
            } else if (error.response.status === 401) {
              // url is private, ask for authentiction
              history.push(`/auth/${code_}`);
            } else if (error.response.status === 302) {
              window.location.replace(error.response.data.longUrl);
            }
          } else {
            history.push('/page-not-found');
          }
        })
        .finally(() => {});
    }

    redirectToPage(code);
  }, [code, history]);

  return <Suspense fallback={<div>{t('translation:loading')}</div>} />;
}
