import React, { useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';

import { Container, ModalContent, ModalInput } from './styles';

const GoToAnalyticsModal = ({ history, isShowing, hide, goToAnalytics }) => {
  // url code data
  const [code, setCode] = useState('');
  const [t, i18n] = useTranslation();
  const [error, setError] = useState(false);

  // goes to analytics page with input code
  const handleSubmit = () => {
    if (code) {
      history.push(`/analytics/${code}`);
    } else {
      setError(true);
    }
  };

  // listen for user input change
  const handleCodeChange = e => {
    setCode(e.target.value);
    if (e.target.value) {
      setError(false);
    }
  };

  // show or close modal depending on user click on analytics icon
  return isShowing
    ? ReactDOM.createPortal(
        <Container>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <h1>{t('translation:analytics.title')}</h1>
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <ModalContent
                data-testid="goToAnalyticsForm"
                data-netlify="true"
                // schema={schema}
                onSubmit={handleSubmit}
              >
                <span>
                  <span>{t('translation:analytics.modal.paste')}</span>
                  <strong>{t('translation:analytics.modal.code')}</strong>
                </span>
                <ModalInput
                  data-testid="codeUrl"
                  onChange={handleCodeChange}
                  type="text"
                  name="codeUrl"
                  placeholder={t('translation:analytics.modal.placeholder')}
                />
                <small className="noCode">
                  {error && t('translation:analytics.modal.needed')}
                </small>
                <button
                  type="submit"
                  className="modal-send-button"
                  data-dismiss="modal"
                  aria-label="See analytics"
                >
                  <span aria-hidden="true">
                    {t('translation:analytics.see')}
                  </span>
                </button>
              </ModalContent>
            </div>
          </div>
        </Container>,
        document.body
      )
    : null;
};

export default GoToAnalyticsModal;
