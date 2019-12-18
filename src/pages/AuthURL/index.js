import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaUnlockAlt, FaWpforms } from 'react-icons/fa';
import { useSpring } from 'react-spring';

import ErrorWarn from '../../components/ErrorWarn';
import api from '../../services/api';
import { AuthForm } from './styles';

export default function AuthURL({ history, match }) {
  const { code } = match.params;

  const [t, i18n] = useTranslation();
  const [accessKey, setAccessKey] = useState('');
  const [name, setName] = useState('');
  const info = {
    ip: '',
    browser: 'google',
    name: 'iago',
    country: 'London',
  };
  // const [urlString, setUrlString] = useState('');
  // const paths = history.location.pathname.split('/');
  // const code = paths[paths.length - 1];

  const shortUlr = `${process.env.REACT_APP_BASE_URL}/${code}`;

  // errors from http request
  const [error, setError] = useState({ message: '' });

  // Props for fade-in/out animations using react-spring, based on states
  const propsSpringErrorBox = useSpring({
    opacity: error.message ? 1 : 0,
    duration: 800,
  });

  async function redirectToPage(e, code_) {
    e.preventDefault();

    await api
      .put(`${process.env.REACT_APP_API_URL}/redirect/${code_}`, {
        accessKey,
        name,
        info,
      })
      .then(response => {
        if (response.status === 200) {
          const { longUrl } = response.data;
          window.location.replace(longUrl);
        }
      })
      .catch(errRes => {
        if (errRes && errRes.response) {
          const { longUrl } = errRes.response.data;

          if (errRes.response.status === 404) {
            history.push('/page-not-found');
          } else if (errRes.response.status === 401) {
            // todo animation nope if not accessible
          } else if (errRes.response.status === 302) {
            window.location.replace(longUrl);
          }

          if (errRes.response.data.error) {
            setError({ message: errRes.response.data.error });
          }
        } else {
          history.push('/page-not-found');
        }
      });
  }

  const handleAccessKeyChange = e => {
    console.log(accessKey);
    setAccessKey(e.target.value);
  };

  const handleNameChange = e => {
    console.log(name);
    setName(e.target.value);
  };

  return (
    <AuthForm
      data-netlify="true"
      onSubmit={e => {
        redirectToPage(e, code);
      }}
    >
      <h1>{t('translation:auth.title')}</h1>
      <h1>{shortUlr}</h1>
      <input
        placeholder={t('translation:auth.name')}
        onChange={handleNameChange}
        type="text"
      />
      <input
        placeholder={t('translation:auth.password')}
        onChange={handleAccessKeyChange}
        type="password"
      />
      <button type="submit">
        <span>{t('translation:auth.access')}</span>
        <FaUnlockAlt color="#fff" size={14} />{' '}
      </button>
      {error.message && (
        <ErrorWarn
          fadeAnimation={propsSpringErrorBox}
          message={error.message}
        />
      )}
    </AuthForm>
  );
}
