import '../../styles/animations.css';

import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChartBar } from 'react-icons/fa';
import { MdNewReleases } from 'react-icons/md';
import { useSpring } from 'react-spring';
import socketio from 'socket.io-client';

import CreatedURLCounter from '../../components/CreatedURLCounter';
import CustomInput from '../../components/CustomInput';
import ErrorWarn from '../../components/ErrorWarn';
import Modal from '../../components/GoToAnalyticsModal';
import NewUrlBox from '../../components/NewUrlBox';
import useModal from '../../hooks/modal';
import api from '../../services/api';
import { Container } from './styles';

export default function Home({ history }) {
  const [t, i18next] = useTranslation();

  const { isShowing, toggle } = useModal();

  // created url
  const [newUrl, setNewUrl] = useState({
    shortUrl: '',
    longUrl: '',
    accessKey: '',
    expirationDateTime: '',
  });

  const [shouldExpandOptions, setShouldExpandOptions] = useState(false);

  // newly created urls notifications from socketio
  const [incomingURLs, setIncomingURLS] = useState([]);

  // errors from http request
  const [error, setError] = useState({ message: '' });

  // Prop for fade-in and expand for main container
  const propsSpringMainContainer = useSpring({
    from: {
      opacity: 0,
      transform: 'scale(0)',
    },
    to: {
      opacity: 1,
      transform: 'scale(1)',
    },
    config: {
      duration: 800,
    },
  });

  // Props for fade-in/out animations using react-spring, based on states
  const propsSpringErrorBox = useSpring({
    opacity: error.message ? 1 : 0,
    duration: 800,
  });
  const propsSpringNewUrlBox = useSpring({
    opacity: newUrl.longUrl ? 1 : 0,
    duration: 800,
  });

  const goToAnalytics = code => {
    history.push(`/analytics/${code}`);
  };

  const socket = useMemo(() => {
    return socketio(`${process.env.REACT_APP_API_URL}`);
  }, []);

  // changes new url count everytime a URL is created by someone
  useEffect(() => {
    socket.on('created_url', url => {
      setIncomingURLS([...incomingURLs, url]);
    });
  }, [socket, incomingURLs]);

  const handleSubmitUrl = async (
    e,
    { longUrl, accessKey, isPrivate, expirationDateTime }
  ) => {
    e.preventDefault();
    if (!accessKey) {
      accessKey = '';
    }

    setNewUrl({
      ...newUrl,
      isPrivate,
      accessKey,
      expirationDateTime,
    });

    try {
      const res = await api.post(`${process.env.REACT_APP_API_URL}/create`, {
        isPrivate,
        accessKey,
        expirationDateTime,
        longUrl,
      });

      if (res.status === 200) {
        if (res.data.error) {
          setError({ message: res.data.message });
          return;
        }

        setError({ message: '' });

        const { shortUrl, code } = res.data;
        setNewUrl({ shortUrl, longUrl, accessKey, code });
      } else if (res.status === 429) {
        //
      } else {
        setError({ message: "Couldn't connect to server" });
      }
    } catch (err) {
      console.log('error');
      setError({ message: "Couldn't connect to server" });
    }
  };

  return (
    <>
      <FaChartBar
        onClick={toggle}
        style={{
          position: 'absolute',
          top: '40px',
          left: '40px',
          cursor: 'pointer',
          zIndex: '3',
        }}
        data-tip={t('translation:analytics.title')}
        size={24}
      />
      <Container style={propsSpringMainContainer}>
        {/* <img src="" alt="Crush.it logo" /> */}
        <h1>
          shrtn<strong>-it</strong>
        </h1>

        <CustomInput
          haveRightIcon
          haveLeftIcon
          borderRadius={30}
          error={error}
          action={handleSubmitUrl}
          isExpandedOptions={shouldExpandOptions}
        />

        {error.message && (
          <ErrorWarn
            fadeAnimation={propsSpringErrorBox}
            message={error.message}
          />
        )}
        {newUrl.shortUrl && (
          <NewUrlBox
            history={history}
            fadeAnimation={propsSpringNewUrlBox}
            url={newUrl}
          />
        )}
        {/* <button onClick={goToAnalytics}>PageNotFound></button> */}
        <CreatedURLCounter numberOfURLs={incomingURLs.length} />
      </Container>
      <Modal
        history={history}
        goToAnalytics={goToAnalytics}
        isShowing={isShowing}
        hide={toggle}
      />
    </>
  );
}
