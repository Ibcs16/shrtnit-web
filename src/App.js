import React, { useState } from "react";
import GlobalStyle from "./styles/global";
import Routes from "./routes";
import ReactTooltip from "react-tooltip";
import { MdTranslate } from "react-icons/md";
import { FaChartBar } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import LanguageSelectionModal from "./components/LanguageSelectionModal";
// import { I18nextProvider } from "react-i18next";
// import translation from "./config/translation/translation.js";

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
      animationIterationCount: "infinite"
    };
  }

  return (
    <>
      <GlobalStyle />

      <ReactTooltip />

      {!modalIsOpened && (
        <MdTranslate
          style={{
            position: "absolute",
            top: "40px",
            right: "40px",
            cursor: "pointer"
          }}
          data-tip="Change language"
          size={24}
          onClick={openModal}
        />
      )}

      {/* wrap i18 around routes for translation of components texts */}
      {/* <I18nextProvider i18n={translation}> */}
      {modalIsOpened && <LanguageSelectionModal />}
      <Routes />
      {/* </I18nextProvider> */}

      <ul className="squares">
        <li style={getRandomStyle()}>'dadasdads'</li>
        <li style={getRandomStyle()}>'dadasdads'</li>
        <li style={getRandomStyle()}>'dadasdads'</li>
        <li style={getRandomStyle()}>'dadasdads'</li>

        <li style={getRandomStyle()}>'dadasdads'</li>
        <li style={getRandomStyle()}>'dadasdads'</li>
        <li style={getRandomStyle()}>'dadasdads'</li>
        <li style={getRandomStyle()}>'dadasdads'</li>
      </ul>
      <ToastContainer
        enableMultiContainer
        autoClose={4000}
        containerId={"all"}
        position={toast.POSITION.TOP_RIGHT}
      />
    </>
  );
}

export default App;
