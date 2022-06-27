import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import i18n from './i18n';
import Navigation from './navigation';
import store from './redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDefaultAppLocale } from './helpers';
import { axiosInstance, constants } from './config';
const App: React.FC = () => {
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      let lang = await AsyncStorage.getItem('locale');

      if (lang == null) {
        const locale = getDefaultAppLocale().toString();
        lang = locale.split('_')[0];
      }
      i18n.locale = lang!;
      axiosInstance.defaults.params = {
        apiKey: constants.apiKey,
        language: lang,
      };
      setLoading(false);
    })();
  }, []);
  return <Provider store={store}>{!isLoading && <Navigation />}</Provider>;
};

export default App;
