import '../../styles/animations.css';

import React, { useEffect, useMemo, useState } from 'react';
import { FaChartBar } from 'react-icons/fa';
import { MdNewReleases } from 'react-icons/md';
import { useSpring } from 'react-spring';
import socketio from 'socket.io-client';

import CreatedURLCounter from '../../components/CreatedURLCounter';
import CustomInput from '../../components/CustomInput';
import ErrorWarn from '../../components/ErrorWarn';
import NewUrlBox from '../../components/NewUrlBox';
import api from '../../services/api';
import { Container } from './styles';

export default function Home({ history }) {
  // created url
  const [newUrl, setNewUrl] = useState({
    shortUrl: '',
    longUrl: '',
    isPrivate: false,
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

  const goToAnalytics = () => {
    history.push('/analytics');
  };

  const socket = useMemo(() => {
    return socketio('http://localhost:3000');
  }, []);

  useEffect(() => {
    socket.on('created_url', url => {
      console.log('criou');
      setIncomingURLS([...incomingURLs, url]);
    });
  }, [socket, incomingURLs]);

  const handleSubmitUrl = async (
    e,
    { isPrivate, longUrl, accessKey, expirationDateTime }
  ) => {
    isPrivate = isPrivate !== false;
    e.preventDefault();
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
          console.log(res.data);
          setError({ message: res.data.message });
          // const timer = setTimeout(() => {
          //   setError({ message: "" });
          // }, 4000);
          // return () => clearTimeout(timer);
          return;
        }

        setError({ message: '' });

        const { shortUrl } = res.data;
        setNewUrl({ shortUrl, longUrl });
      } else if (res.status === 429) {
        //   notifyError();
        //   //Todo mostrar dialog de muitas requisições
        // } else {
      } else {
        setError({ message: "Couldn't connect to server" });
      }
    } catch (err) {
      console.log('error');
      setError({ message: "Couldn't connect to server" });
    }
  };

  const toggleOptions = toggle => {
    setShouldExpandOptions(toggle);
  };

  return (
    <>
      <FaChartBar
        onClick={goToAnalytics}
        style={{
          position: 'absolute',
          top: '40px',
          left: '40px',
          cursor: 'pointer',
        }}
        data-tip="Analytics"
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
          toggleOptions={toggleOptions}
          isExpandedOptions={shouldExpandOptions}
        />
        {newUrl.isPrivate && <NewUrlBox url={newUrl} />}
        {error.message && (
          <ErrorWarn
            fadeAnimation={propsSpringErrorBox}
            message={error.message}
          />
        )}
        {newUrl.shortUrl && (
          <NewUrlBox fadeAnimation={propsSpringNewUrlBox} url={newUrl} />
        )}
        {/* <button onClick={goToAnalytics}>PageNotFound></button> */}
        <CreatedURLCounter numberOfURLs={incomingURLs.length} />
      </Container>
    </>
  );
}
