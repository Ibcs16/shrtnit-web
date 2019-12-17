import 'react-toastify/dist/ReactToastify.css';
// import { I18nextProvider } from "react-i18next";
// import translation from "./config/translation/translation.js";
import './config/ReactotronConfig';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChartBar } from 'react-icons/fa';
import { MdTranslate } from 'react-icons/md';
import { toast,ToastContainer } from 'react-toastify';
import ReactTooltip from 'react-tooltip';

import LanguageSelection from './components/LanguageSelection';
import Routes from './routes';
import GlobalStyle from './styles/global';

function App({ history }) {
  const { t, i18n } = useTranslation();

  return (
    <>
      <GlobalStyle />

      <ReactTooltip />

      <LanguageSelection />

      <Routes />
    </>
  );
}

export default App;
