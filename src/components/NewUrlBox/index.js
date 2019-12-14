import '../../styles/animations.css';

import React, { useRef, useState } from 'react';

import { Container } from './styles';

export default function NewUrlBox({ url }) {
  // useEffect({}, [url]);
  const [copySuccess, setCopySuccess] = useState(false);
  const textPRef = useRef(null);

  const copyToClipboard = () => {
    console.log('clicking');
    textPRef.current.select();
    document.execCommand('copy');

    setCopySuccess(true);
  };

  const handleURLRedirect = event => {
    window.location.replace(event.currentTarget.textContent);
  };

  return (
    <Container>
      <div className="left">
        <p onClick={handleURLRedirect}>{url.longUrl}</p>
      </div>

      <div className="right">
        <p onClick={handleURLRedirect}>{url.shortUrl}</p>
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
