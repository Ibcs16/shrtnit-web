import './i18n';

import dotenv from 'dotenv';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const envFile = process.env.NODE_ENV !== `test` ? `.env` : '.env.test';
dotenv.config({ path: envFile });

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>,
  document.getElementById('root')
);
