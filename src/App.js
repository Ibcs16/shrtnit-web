import 'react-toastify/dist/ReactToastify.css';
import './config/ReactotronConfig';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Particles from 'react-particles-js';
import { Router } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import LanguageSelection from './components/LanguageSelection';
import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/global';

// import { I18nextProvider } from "react-i18next";
// import translation from "./config/translation/translation.js";

function App() {
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

      <Router history={history}>
        <Routes />
      </Router>
      {/* <Particles
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
      /> */}
    </>
  );
}

export default App;
