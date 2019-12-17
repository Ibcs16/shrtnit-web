import '../../styles/animations.css';

import React, { useRef, useState } from 'react';

import { Container } from './styles';

export default function NewUrlBox({ history, url, fadeAnimation }) {
  // useEffect({}, [url]);
  const [copySuccess, setCopySuccess] = useState(false);
  const textPRef = useRef(null);

  const copyToClipboard = () => {
    console.log('clicking');
    textPRef.current.select();
    document.execCommand('copy');

    setCopySuccess(true);
  };

  const handleURLRedirect = code => {
    history.push(`${code}`);
  };

  return (
    <Container style={fadeAnimation}>
      <div data-tip={url.longUrl} className="left">
        <p onClick={() => handleURLRedirect(url.code)}>{url.longUrl}</p>
      </div>

      <div className="right">
        <p onClick={() => handleURLRedirect(url.code)}>{url.shortUrl}</p>
        {document.queryCommandSupported('copy') && (
          <button
            className={copySuccess ? 'copySuccess' : ''}
            onClick={copyToClipboard}
          >
            Copy
          </button>
        )}
        <input
          value={url.shortUrl}
          ref={textPRef}
          name="toCopyUrl"
          style={{ display: 'none' }}
        />
        {copySuccess}
      </div>
    </Container>
  );
}
