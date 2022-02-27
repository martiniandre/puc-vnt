import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import PTBR from './locales/pt_BR/pt_br.json';
import ENUS from './locales/en_US/en_us.json';
import FR from './locales/fr_FR/fr.json';

const resources = {
    'pt-BR': PTBR,
    'en-US': ENUS,
    'fr-FR': FR,
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: navigator.language,
    })


export default i18n;