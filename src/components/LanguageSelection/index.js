import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  MdRadioButtonChecked,
  MdRadioButtonUnchecked,
  MdTranslate,
} from 'react-icons/md';
import { useSpring } from 'react-spring';

import { Badge, Container, Language, TranslationBox } from './styles';

export default function LanguageSelection() {
  // translation
  const [t, i18n] = useTranslation();
  const [languageChange, setLanguageChange] = useState('');

  const [languages, setLanguages] = useState([]);

  // translation box display state
  const [tBoxIsOpened, setTBoxIsOpened] = useState(true);
  // translation box animation
  const [props, set, stop] = useSpring(() => ({
    to: {
      display: 'none',
    },
  }));

  useEffect(() => {
    setLanguages([
      {
        name: t('translation:english-us'),
        ln: 'en',
        isSelected: i18n.language === 'en',
      },
      {
        name: t('translation:spanish-es'),
        ln: 'es',
        isSelected: i18n.language === 'es',
      },
      {
        name: t('translation:portuguese-br'),
        ln: 'pt-BR',
        isSelected: i18n.language === 'pt-BR',
      },
    ]);
  }, [i18n.language, languageChange, t]);

  const changeLanguage = async ln => {
    await i18n.changeLanguage(ln);
    setLanguageChange(ln);
  };

  // opens or close the box based on last state

  const toggleTBox = () => {
    console.log('mudou', tBoxIsOpened);
    set({
      from: {
        transform: tBoxIsOpened ? 'scale(0)' : 'scale(1)',
      },
      to: {
        transform: tBoxIsOpened ? 'scale(1)' : 'scale(0)',
        display: tBoxIsOpened ? 'block' : 'none',
        opacity: tBoxIsOpened ? 1 : 0,
      },
      config: {
        duration: 200,
      },
    });
    stop();

    setTBoxIsOpened(!tBoxIsOpened);
  };

  return (
    <div
      style={{
        position: 'absolute',
        bottom: '40px',
        right: '40px',
      }}
    >
      <Container>
        <TranslationBox style={props}>
          {languages.map(language => (
            <Language
              selected={language.isSelected}
              key={language.ln}
              onClick={() => changeLanguage(language.ln)}
            >
              <p>{language.name}</p>
              <button type="button" onClick={() => changeLanguage(language.ln)}>
                {language.isSelected ? (
                  <MdRadioButtonChecked size={16} color="rgb(4,211,97)" />
                ) : (
                  <MdRadioButtonUnchecked size={16} color="#fff" />
                )}
              </button>
            </Language>
          ))}
        </TranslationBox>
        <Badge>
          <MdTranslate
            data-tip={t('translation:change-language')}
            size={24}
            color="#fff"
            onClick={toggleTBox}
          />
        </Badge>
      </Container>
    </div>
  );
}