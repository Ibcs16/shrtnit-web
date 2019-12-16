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
  const [modalIsOpened, setModalIsOpened] = useState(false);

  const openModal = () => {
    setModalIsOpened(true);
  };

  const closeModal = () => {
    setModalIsOpened(false);
  };

  function getRandomStyle() {
    const random = (max, min) => Math.random(max, min) * max - min;
    const position = random(99, 1);
    const size = Math.floor(random(99, 1));
    const rotation = Math.floor(random(45, -45));

    return {
      bottom: `-${size}px`,
      left: `${position}%`,
      position: `absolute`,
      transform: [`rotate(${rotation}deg)`],
      animationDelay: `${random(5, 0.1)}s`,
      animationDuration: `${random(24, 12)}`,
      animationTimingFunction: `cubic-bezier(${Math.random()},${Math.random()},${Math.random()},${Math.random()})`,
      animationIterationCount: 'infinite',
    };
  }

  return (
    <>
      <GlobalStyle />

      <ReactTooltip />

      <LanguageSelection />

      <Routes />
      {/* </I18nextProvider> */}

      <ul className="squares">
        <li style={getRandomStyle()}>asdasdasdads</li>
        <li style={getRandomStyle()}>asdasdasdads</li>
        <li style={getRandomStyle()}>asdasdasdads</li>
        <li style={getRandomStyle()}>asdasdasdads</li>

        <li style={getRandomStyle()}>asdasdasdads</li>
        <li style={getRandomStyle()}>asdasdasdads</li>
        <li style={getRandomStyle()}>asdasdasdads</li>
        <li style={getRandomStyle()}>asdasdasdads</li>
      </ul>
      {/* <ToastContainer
        enableMultiContainer
        autoClose={4000}
        containerId="all"
        position={toast.POSITION.TOP_RIGHT}
      /> */}
    </>
  );
}

export default App;
