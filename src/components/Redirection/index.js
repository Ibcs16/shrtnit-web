import { detect } from 'detect-browser';
import React, { Link, Suspense, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import api from '../../services/api';

export default function Redirection({ history, match }) {
  const [t, i18n] = useTranslation();
  // browser detection
  let browser = null;

  // detect browser
  try {
    browser = detect();
  } catch (err) {
    browser = null;
  }

  // shortUrl code to redirect to
  const { code } = match.params;

  useEffect(() => {
    // calls api for redirection and send user info
    async function redirectToPage(code_) {
      const info = {
        ip: 'UNKNOWN',
        browser: 'UNKNOWN',
        name: 'UNKNOWN',
        country: 'UNKNOWN',
      };

      // detect browser name
      switch (browser && browser.name) {
        case 'chrome':
          info.browser = 'Chrome';
          break;
        case 'firefox':
          info.browser = 'Firefox';
          break;
        case 'edge':
          info.browser = 'Edge';
          break;
        default:
          break;
      }

      // gets geo info from ipinfo api
      const ipinfo = await api.get(
        `https://ipinfo.io/json?token=${process.env.REACT_APP_IP_INFO}`
      );

      // update info
      if (ipinfo.status === 200) {
        const { ip, country } = ipinfo.data;
        info.ip = ip;
        info.country = country;
      }

      await api
        .put(`${process.env.REACT_APP_API_URL}/redirect/${code_}`, {
          info,
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
  }, [browser, code, history]);

  return <Suspense fallback={<div>{t('translation:loading')}</div>} />;
}
