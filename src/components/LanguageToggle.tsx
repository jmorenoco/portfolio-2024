'use client'

import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800 rounded-md transition-colors"
    >
      {i18n.language === 'en' ? 'Español' : 'English'}
    </button>
  );
};

export default LanguageToggle;