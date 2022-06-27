import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { colors } from '../../theme';
import { LanguageProps } from './types';

const LanguageItem: React.FC<LanguageProps> = ({ language, label }) => {
  const {
    colors: { text },
  } = useTheme();
  return (
    <View style={styles.container}>
      <RadioButton.Android
        value={language}
        color={colors.primary}
        uncheckedColor={colors.grey}
      />
      <Text style={{ color: text }}>{label}</Text>
    </View>
  );
};

export default LanguageItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
