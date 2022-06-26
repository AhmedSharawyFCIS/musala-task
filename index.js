/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src';
import { name as appName } from './app.json';
import { axiosInstance, constants } from './src/config';

axiosInstance.defaults.params = {
  apiKey: constants.apiKey,
};
AppRegistry.registerComponent(appName, () => App);
