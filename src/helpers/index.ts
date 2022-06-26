import { Scope } from 'i18n-js';
import i18n from '../i18n';
export const translate = (key: Scope) => {
  const { t } = i18n;
  return t(key);
};
