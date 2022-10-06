import React, { useCallback, useContext, useMemo } from 'react';
import { useIntl } from 'react-intl';
import { TranslationsContext} from './translationsContext';
import { MessagesTypes, TType } from './translationTypes';

export interface WithTranslateProps{
    t:TType
}

// use translate inside the component 
export const useTranslate = () => {
    const context = useContext(TranslationsContext);

    if (!context) {
        throw new Error('useTranslation should be used within a translationsContext');
    }

    const { language, setLanguage, pageDirection } = context;
    const inltObejct = useIntl();

    const t = useCallback((message: MessagesTypes) => {
        if (!message) return '';
        return inltObejct.formatMessage({id:message})
    }, [inltObejct])
    
    return useMemo(() => ({ t, language, setLanguage, pageDirection }), [t, language, pageDirection, setLanguage])
}

// use to wrap the component to use translate 

export function withTranslate<T extends WithTranslateProps = WithTranslateProps>(Component: React.ComponentType<T>) {
    
    const displayName = Component.displayName || 'Component';

    const ComponentWithTranslate = (props: Omit<T, keyof WithTranslateProps>) => {
    const { t } = useTranslate();
    const injectedProps = { t };
    return <Component {...injectedProps} {...(props as T)} />;
    };

    ComponentWithTranslate.displayName = `withTranslate(${displayName})`;
    return ComponentWithTranslate;
    
}