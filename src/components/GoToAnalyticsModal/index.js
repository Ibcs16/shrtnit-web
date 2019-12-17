import React, { useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { Container, ModalContent, ModalInput } from './styles';

const GoToAnalyticsModal = ({ history, isShowing, hide, goToAnalytics }) => {
  const [code, setCode] = useState('');
  const [t, i18n] = useTranslation();

  // const code = useMemo(() => url.split('/')[1], [url]);

  const schema = Yup.object().shape({
    codeUrl: Yup.string(t('translation:analytics.modal.valid')).required(
      t('translation:analytics.modal.needed')
    ),
  });

  const handleSubmit = () => {
    if (code) {
      history.push(`/analytics/${code}`);
    }
  };

  const handleCodeChange = e => {
    setCode(e.target.value);
  };

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
                <h1>Analytics</h1>
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
              <ModalContent schema={schema} onSubmit={handleSubmit}>
                <span>
                  <span>{t('translation:analytics.modal.paste')}</span>
                  <strong>{t('translation:analytics.modal.code')}</strong>
                </span>
                <ModalInput
                  onChange={handleCodeChange}
                  type="text"
                  name="codeUrl"
                  placeholder={t('translation:analytics.modal.placeholder')}
                />
                {/* <Link to={>
                  <span>Go to analytics</span>
                </Link> */}
                <button
                  type="submit"
                  className="modal-send-button"
                  data-dismiss="modal"
                  aria-label="See analytics"
                >
                  <span aria-hidden="true">See analytics</span>
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
