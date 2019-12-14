import React, { useEffect, useState } from 'react';
import { FaUnlockAlt, FaWpforms } from 'react-icons/fa';

import { AuthForm } from './styles';

export default function AuthURL() {
  const [urlString, setUrlString] = useState('');

  useEffect(() => {
    const urlTest = 'https://crush.it/bmw3uV';
    urlTest.split().forEach(char => setUrlString(...urlString, char));
    console.log('ai');
  }, [urlString]);

  return (
    <AuthForm>
      <h1>Authenticate to access URL</h1>
      <h1>{urlString}</h1>
      <input placeholder="Name (optional)" type="text" />
      <input placeholder="Password" type="password" />
      <button type="submit">
        <span>Acessar url</span>
        <FaUnlockAlt color="#fff" size={14} />{' '}
      </button>
    </AuthForm>
  );
}
