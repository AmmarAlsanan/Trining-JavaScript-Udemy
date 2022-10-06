import React from 'react';
import { DirectionType } from 'antd/lib/config-provider';
import { Translations } from './translationTypes';

const DEFAULT_VALUE: {
    language: Translations;
    setLanguage: (language: Translations) => void;
    pageDirection: DirectionType;
} = {
    language: Translations.en,
    setLanguage: (language) => {
        return;
    }, pageDirection: 'ltr',
};
export const TranslationsContext = React.createContext(DEFAULT_VALUE);