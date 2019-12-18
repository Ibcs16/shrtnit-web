import React, { Link, Suspense, useEffect } from 'react';

import api from '../../services/api';

export default function Redirection({ history, match }) {
  const { code } = match.params;
  console.log(code, match, history);

  useEffect(() => {
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
          console.log(error);
          if (error && error.response) {
            const { longUrl } = error.response.data;

            if (error.response.status === 404) {
              history.push('/page-not-found');
            } else if (error.response.status === 401) {
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

  return <Suspense fallback={<div>Loading...</div>} />;
}
