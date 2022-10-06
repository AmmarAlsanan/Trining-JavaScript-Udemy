import en from '../assets/translations/en.json'
import ar from '../assets/translations/ar.json'

export type MessagesTypes = keyof (typeof en & typeof ar);

export interface TType{
    (message:MessagesTypes):string
}

export type TranslationsTypes = {
  [translation in Translations]: {
    [key: string]: string;
  };
};

export enum Translations {
  en = 'en',
  ar = 'ar',
}

export interface Language {
  language: keyof typeof Translations;
}

export interface TranslationsProviderProps {
  messages: TranslationsTypes;
   children:React.ReactNode ,
}
