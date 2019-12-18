import 'react-toastify/dist/ReactToastify.css';
// import { I18nextProvider } from "react-i18next";
// import translation from "./config/translation/translation.js";
import './config/ReactotronConfig';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChartBar } from 'react-icons/fa';
import { MdTranslate } from 'react-icons/md';
import Particles from 'react-particles-js';
import { toast, ToastContainer } from 'react-toastify';
import ReactTooltip from 'react-tooltip';

import LanguageSelection from './components/LanguageSelection';
import Routes from './routes';
import GlobalStyle from './styles/global';

function App({ history }) {
  const { t, i18n } = useTranslation();
  //   const particlesOpt = {
  //     particles: {
  //       line_linked: {
  //         shadow: {
  //           enable: true,
  //           color: "#3CA9D1",
  //           blur: 5
  //         }
  //       }
  //     }
  //   }}
  //   style={{
  //     width: '100%',
  //     backgroundImage: `url(${logo})`
  //   }
  // }

  return (
    <>
      <GlobalStyle />

      <ReactTooltip />

      <LanguageSelection />

      <Routes />
      <Particles
        params={{
          particles: {
            line_linked: {
              shadow: {
                enable: true,
                color: '#3CA9D1',
                blur: 5,
              },
            },
          },
        }}
        style={{
          width: '100%',
          // backgroundImage: `url(${logo})`,
        }}
      />
    </>
  );
}

export default App;
