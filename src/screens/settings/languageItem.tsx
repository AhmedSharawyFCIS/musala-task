import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { colors } from '../../theme';
import { LanguageProps } from './types';

const LanguageItem: React.FC<LanguageProps> = ({
  language,
  label,
  onChangeLanguageCB,
}) => {
  const {
    colors: { text },
  } = useTheme();

  const onChangeLanguage = () => onChangeLanguageCB(language);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onChangeLanguage}
    >
      <RadioButton.Android
        value={language}
        color={colors.primary}
        uncheckedColor={colors.grey}
      />
      <Text style={{ color: text }}>{label}</Text>
    </TouchableOpacity>
  );
};

export default LanguageItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
});
