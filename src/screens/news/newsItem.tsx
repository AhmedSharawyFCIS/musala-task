import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors, commonStyles } from '../../theme';
import { NewsItemProps } from './types';
import CustomImage from '../../components/customImage';
import { useTheme } from '@react-navigation/native';

const NewsItem: React.FC<NewsItemProps> = ({ title, image, onPressCB }) => {
  const {
    colors: { card, text },
  } = useTheme();
  return (
    <TouchableOpacity
      style={[
        commonStyles.flex,
        commonStyles.shadow,
        styles.container,
        { backgroundColor: card },
      ]}
      activeOpacity={0.7}
      onPress={onPressCB}
    >
      <CustomImage url={image} style={styles.image} />
      <Text
        style={[commonStyles.flex, styles.text, { color: text }]}
        numberOfLines={4}
      >
        {title}
      </Text>
      <MaterialIcons
        name="keyboard-arrow-right"
        color={colors.black}
        size={RFValue(20)}
        style={styles.arrowIcon}
      />
    </TouchableOpacity>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    margin: RFValue(10),
    borderRadius: RFValue(10),
    paddingEnd: RFValue(10),
    height: RFValue(82),
  },
  image: {
    width: RFValue(100),
    borderTopStartRadius: RFValue(10),
    borderBottomStartRadius: RFValue(10),
    marginEnd: RFValue(10),
  },
  text: {
    paddingVertical: RFValue(10),
  },
  arrowIcon: {
    alignSelf: 'center',
    marginStart: RFValue(5),
  },
});
