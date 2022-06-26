import i18n from 'i18n-js';
import en from './locale/en.json';
import de from './locale/de.json';

i18n.fallbacks = true;
i18n.translations = { en, de };

export default i18n;
