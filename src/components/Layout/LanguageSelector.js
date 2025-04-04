import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

const LanguageSelector = () => {
  const { language, changeLanguage, t, availableLanguages } = useContext(LanguageContext);

  const languageNames = {
    en: 'English',
    es: 'Español'
    // Add more languages as needed
  };

  const handleChange = (e) => {
    changeLanguage(e.target.value);
  };

  return (
    <div className="flex items-center">
      <select
        className="form-control"
        value={language}
        onChange={handleChange}
        aria-label={t('language.select')}
      >
        {availableLanguages.map(lang => (
          <option key={lang} value={lang}>
            {languageNames[lang] || lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;