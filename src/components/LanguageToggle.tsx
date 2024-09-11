'use client'

import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import spanishFlag from '@/images/icons/spanish-flag.svg';
import englishFlag from '@/images/icons/uk_flag.svg';

const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800 rounded-md transition-colors flex items-center"
    >
      <Image 
        src={i18n.language === 'en' ? spanishFlag : englishFlag}
        alt={i18n.language === 'en' ? 'Bandera española' : 'English flag'}
        width={20}
        height={20}
        className="mr-2"
      />
      {i18n.language === 'en' ? 'Español' : 'English'}
    </button>
  );
};

export default LanguageToggle;