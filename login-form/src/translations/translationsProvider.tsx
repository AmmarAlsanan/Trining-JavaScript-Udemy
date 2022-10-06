import React, { FC } from 'react';
import ConfigProvider, { DirectionType } from 'antd/lib/config-provider';
import { TranslationsContext } from './translationsContext';
import { Translations, TranslationsProviderProps } from './translationTypes';
import { IntlProvider } from 'react-intl';

export const TranslationProvider:FC<TranslationsProviderProps> = ({ children,  messages }) => {

    const [pageDirection, setPageDirection] = React.useState<DirectionType>()
    const [language, setLanguageState] = React.useState(Translations.en)

    const setLanguage = React.useCallback((language: Translations) => {
        setLanguageState(language)

        if (language === Translations.ar) {
            setPageDirection('rtl')
        } else {
            setPageDirection('ltr')
        }
    }, [])
    
    const value = React.useMemo(() => ({ language, setLanguage, pageDirection }), [language, pageDirection, setLanguage])
    
    return (
        <TranslationsContext.Provider value={value}>
            <ConfigProvider direction={pageDirection}>
                <IntlProvider key={language} locale={language} textComponent={React.Fragment} messages={messages[language]}>{ children}</IntlProvider>
            </ConfigProvider>
        </TranslationsContext.Provider>
    )

    

}