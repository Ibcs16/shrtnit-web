import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useTranslation } from 'react-i18next';
import { IoMdCalendar, IoMdEye, IoMdEyeOff, IoMdLock } from 'react-icons/io';
import { animated } from 'react-spring';

import { Container, UrlOption, UrlOptionInput } from './styles';

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
      style={{ ...expandProps, width: '100%', marginBottom: '38px' }}
    >
      <Container>
        <UrlOption>
          <div>
            <IoMdLock size={20} />
          </div>
          <UrlOptionInput
            placeholder={t('translation:password')}
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
        <UrlOption>
          <div>
            <IoMdCalendar size={20} />
          </div>

          {/* <DatePicker
            style={{ zIndex: '99999' }}
            locale={i18next.language}
            selected={startDate}
            onChange={date => setStartDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
          /> */}

          <UrlOptionInput
            onChange={handleDateChange}
            placeholder={t('translation:expiration')}
            type="datetime-local"
          />
        </UrlOption>
      </Container>
    </animated.div>
  );
}
