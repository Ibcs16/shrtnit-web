import '../../styles/animations.css';

import React, { useEffect, useMemo, useState } from 'react';
import { FaChartBar } from 'react-icons/fa';
import { MdNewReleases } from 'react-icons/md';
import socketio from 'socket.io-client';

import CreatedURLCounter from '../../components/CreatedURLCounter';
import CustomInput from '../../components/CustomInput';
import ErrorWarn from '../../components/ErrorWarn';
import NewUrlBox from '../../components/NewUrlBox';
import api from '../../services/api';
import { Container } from './styles';

export default function Home({ history }) {
  const [newUrl, setNewUrl] = useState({
    shortUrl: '',
    longUrl: '',
    isPrivate: false,
  });
  const [incomingURLs, setIncomingURLS] = useState([]);
  const [error, setError] = useState({ message: '' });
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

  const handleSubmitUrl = async (e, { isPrivate, longUrl }) => {
    e.preventDefault();
    setNewUrl({ ...newUrl, isPrivate });

    try {
      const res = await api.post('https://localhost:3000/create', {
        longUrl,
        isPrivate,
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
      <Container>
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
        />
        {newUrl.isPrivate && <NewUrlBox url={newUrl} />}
        {error.message && <ErrorWarn message={error.message} />}
        {newUrl.shortUrl && <NewUrlBox url={newUrl} />}
        {/* <button onClick={goToAnalytics}>PageNotFound></button> */}
        <CreatedURLCounter numberOfURLs={incomingURLs.length} />
      </Container>
    </>
  );
}
