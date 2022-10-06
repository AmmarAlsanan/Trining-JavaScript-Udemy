import { TranslationProvider } from './translations';
import AppLayout from './UI/Components/AppLayout';
import {translations}from './namespace'


const App=()=> {
  return (
    <TranslationProvider messages={translations} >
      <AppLayout />
    </TranslationProvider>
  );
}

export default App;
