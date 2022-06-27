import { Scope } from 'i18n-js';
import { NativeModules, Platform } from 'react-native';
import i18n from '../i18n';
export const translate = (key: Scope) => {
  const { t } = i18n;
  return t(key);
};

export const getDefaultAppLocale = () =>
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
    : NativeModules.I18nManager.localeIdentifier;
