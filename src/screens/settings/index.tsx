import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { translate } from '../../helpers';
import { RadioButton } from 'react-native-paper';
import LanguageItem from './languageItem';
import { RFValue } from 'react-native-responsive-fontsize';
import i18n from '../../i18n';
import RNRestart from 'react-native-restart';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Settings: React.FC = () => {
  const { locale } = i18n;

  const onChangeLanguage = async (newLanguage: string) => {
    await AsyncStorage.setItem('locale', newLanguage);
    RNRestart.Restart();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{translate('language')}</Text>

      <RadioButton.Group onValueChange={onChangeLanguage} value={locale}>
        <LanguageItem
          label={translate('english')}
          language="en"
          onChangeLanguageCB={onChangeLanguage}
        />
        <LanguageItem
          label={translate('german')}
          language="de"
          onChangeLanguageCB={onChangeLanguage}
        />
      </RadioButton.Group>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    margin: RFValue(20),
  },
  header: {
    fontWeight: '700',
    fontSize: RFValue(17),
    marginBottom: RFValue(10),
  },
});
