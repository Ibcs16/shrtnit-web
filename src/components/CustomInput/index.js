import '../../styles/animations.css';

import { IoMdLock, IoMdSend, IoMdUnlock } from 'react-icons/io';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import React, { useEffect, useState } from 'react';

import { CustomInputContainer } from './styles';
import MoreOptions from '../MoreOptions';
import { useSpring } from 'react-spring';
import { useTranslation } from 'react-i18next';

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
  const [expandOptions, setexpandOptions] = useState(true);

  // translation box animation
  const [props, set, stop] = useSpring(() => ({
    to: {
      display: 'none',
    },
  }));

  // animate toggle for more options => show/hide
  const toggleOptions = () => {
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

    setexpandOptions(!expandOptions);
  };

  // url data in input
  const [newURL, setNewURL] = useState({
    longUrl: '',
    accessKey: '',
    expirationDateTime: '',
    isPrivate: false,
  });
  const [errorClass, setErrorClass] = useState('');

  // change url state when input change
  const handleInputChange = e => {
    setNewURL({ ...newURL, longUrl: e.target.value });
  };

  const handleDateChange = e => {
    console.log(e.target.value);
    setNewURL({ ...newURL, expirationDateTime: e.target.value });
  };

  const handlePasswordChange = e => {
    setNewURL({
      ...newURL,
      accessKey: e.target.value,
      isPrivate: e.target.value !== '',
    });
  };

  // component

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
                !expandOptions
                  ? t('translation:less-options')
                  : t('translation:more-options')
              }
              type="button"
            >
              {!expandOptions && (
                <MdExpandLess
                  onClick={() => toggleOptions(false)}
                  size={24}
                  color="rgba(0,0,0,.2)"
                />
              )}
              {expandOptions && (
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
