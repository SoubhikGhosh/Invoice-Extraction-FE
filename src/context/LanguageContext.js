import React, { createContext, useState, useEffect } from 'react';
import { translations } from '../utils/translations';

// Create Language Context
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Initialize language from localStorage or default to 'en'
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage || 'en';
  });

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
    // You could also set language attributes on the HTML tag if needed
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  // Function to change language
  const changeLanguage = (newLanguage) => {
    if (translations[newLanguage]) {
      setLanguage(newLanguage);
    } else {
      console.warn(`Translation for ${newLanguage} not available`);
    }
  };

  // Translation function
  const translate = (key) => {
    // Get translation from current language, or fallback to English, or return the key itself
    return translations[language]?.[key] || translations['en']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      changeLanguage, 
      t: translate,
      availableLanguages: Object.keys(translations)
    }}>
      {children}
    </LanguageContext.Provider>
  );
};