import { Container, UrlOption, UrlOptionInput } from './styles';
import { IoMdCalendar, IoMdEye, IoMdEyeOff, IoMdLock } from 'react-icons/io';
import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import { animated } from 'react-spring';
import { useTranslation } from 'react-i18next';

export default function MoreOptions({
  handlePasswordChange,
  handleDateChange,
  expandProps,
}) {
  // state for storing password viewing type = text/password
  const [viewPassword, setViewPassword] = useState(false);

  // selected expiration date
  const [startDate, setStartDate] = useState(new Date());

  // translation info
  const [t, i18next] = useTranslation();

  // return component
  return (
    <animated.div
      style={{ ...expandProps, width: '100%', marginBottom: '48px' }}
    >

      <Container>
          <label
            style={{
              color: 'black',
              opacity: .8
            }}
            htmlFor="access_key">
            {t('translation:password')}
            <UrlOption>
              <div>
                <IoMdLock size={20} />
              </div>
                <UrlOptionInput
                  id="access_key"
                  name="access_key"
                  placeholder={t('translation:password_place_holder')}
                  type={viewPassword ? 'text' : 'password'}
                  onChange={handlePasswordChange}
                />
              <div>
                {!viewPassword ? (
                  <IoMdEye
                  onClick={() => setViewPassword(!viewPassword)}
                  size={20}
                  color="rgba(0,0,0,.3)"
                  />
                  ) : (
                    <IoMdEyeOff
                    onClick={() => setViewPassword(!viewPassword)}
                    size={20}
                    color="rgba(0,0,0,.3)"
                    />
                    )}
              </div>
            </UrlOption>
          </label>
          <label
            style={{
              color: 'black',
              opacity: .8
            }}
            htmlFor="expiration">
              {t('translation:expiration')}
            <UrlOption>
              <div>
                <IoMdCalendar size={20} />
              </div>

              <UrlOptionInput
              name="expiration"
              id="expiration"
                onChange={handleDateChange}
                // placeholder={t('translation:expiration')}
                type="datetime-local"
              />
            </UrlOption>
          </label>
      </Container>
    </animated.div>
  );
}
