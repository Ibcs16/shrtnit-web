import '../../styles/animations.css';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoMdLock, IoMdSend, IoMdUnlock } from 'react-icons/io';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import { useSpring } from 'react-spring';

import MoreOptions from '../MoreOptions';
import { CustomInputContainer } from './styles';

export default function CustomInput({
  error,
  action: handleSubmitUrl,
  borderRadius,
  haveLeftIcon = false,
  haveRightIcon = false,
  isExpandedOptions = false,
}) {
  const { t, i18n } = useTranslation();

  // translation box display state
  const [expandOptions, setexpandOptionss] = useState(true);

  // translation box animation
  const [props, set, stop] = useSpring(() => ({
    to: {
      display: 'none',
    },
  }));

  const toggleOptions = () => {
    console.log('mudou', expandOptions);
    set({
      from: {
        height: expandOptions ? '0px' : '100px',
      },
      to: {
        height: expandOptions ? '40px' : '0px',
        display: expandOptions ? 'block' : 'none',
        opacity: expandOptions ? 1 : 0,
      },
      config: {
        duration: 300,
      },
    });
    stop();

    setexpandOptionss(!expandOptions);
  };

  const [newURL, setNewURL] = useState({
    longUrl: '',
    accessKey: '',
    expirationDaTime: '',
    isPrivate: false,
  });
  const [errorClass, setErrorClass] = useState('');

  const handleInputChange = e => {
    setNewURL({ ...newURL, longUrl: e.target.value });
  };

  const handleDateChange = e => {
    console.log(e.target.value);
    setNewURL({ ...newURL, expirationDaTime: e.target.value });
  };

  const handlePasswordChange = e => {
    setNewURL({
      ...newURL,
      accessKey: e.target.value,
      isPrivate: e.target.value !== '',
    });
  };

  useEffect(() => {
    // setErrorClass('nope');
    if (error.message) {
      setErrorClass('nope');
    }

    const timer = setTimeout(() => {
      setErrorClass('');
    }, 700);
    return () => clearTimeout(timer);
  }, [error]);

  return (
    <>
      <CustomInputContainer
        borderRadius={borderRadius}
        onSubmit={e => handleSubmitUrl(e, newURL)}
        id="customInputForm"
        className={errorClass}
      >
        <div>
          {haveLeftIcon && (
            <button
              data-tip={
                !newURL.isPrivate
                  ? t('translation:make-private')
                  : t('translation:make-public')
              }
              type="button"
            >
              {isExpandedOptions && (
                <MdExpandLess
                  onClick={() => toggleOptions(false)}
                  size={24}
                  color="rgba(0,0,0,.2)"
                />
              )}
              {!isExpandedOptions && (
                <MdExpandMore
                  onClick={() => toggleOptions(true)}
                  size={24}
                  color="rgb(4,211,97)"
                />
              )}
            </button>
          )}
        </div>
        <input
          placeholder={t('translation:long-url')}
          type="url"
          name="longUrl"
          required
          defaultValue=""
          value={newURL.longUrl || ''}
          onChange={handleInputChange}
        />
        <div>
          <button type="submit">
            <IoMdSend color="rgb(4,211,97)" size={24} />
          </button>
        </div>
      </CustomInputContainer>
      <MoreOptions
        expandProps={props}
        handleDateChange={handleDateChange}
        handlePasswordChange={handlePasswordChange}
      />
    </>
  );
}
