import '../../styles/animations.css';

import React, { useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useTranslation } from 'react-i18next';

import { Container } from './styles';

export default function NewUrlBox({ history, url, fadeAnimation }) {
  const [t, i18n] = useTranslation();
  // if user copies shorturl to clipboard
  const [copySuccess, setCopySuccess] = useState(false);

  // if user clicks on link to redirect
  const handleURLRedirect = code => {
    history.push(`${code}`);
  };

  // every time a new URL is generated, sets copy state to false
  useEffect(() => {
    setCopySuccess(false);
  }, [url.shortUrl]);

  return (
    <Container style={fadeAnimation}>
      <div data-tip={url.longUrl} className="left">
        <p onClick={() => handleURLRedirect(url.code)}>{url.longUrl}</p>
      </div>

      <div className="right">
        <p
          onClick={() => handleURLRedirect(url.code)}
        >{`${process.env.REACT_APP_BASE_URL}/${url.code}`}</p>
        {document.queryCommandSupported('copy') && (
          <CopyToClipboard
            text={`${process.env.REACT_APP_BASE_URL}/${url.code}`}
            onCopy={() => setCopySuccess(true)}
          >
            <button className={copySuccess ? 'copySuccess' : ''}>
              {!copySuccess ? t('translation:copy') : t('translation:copied')}
            </button>
          </CopyToClipboard>
        )}
      </div>
    </Container>
  );
}
