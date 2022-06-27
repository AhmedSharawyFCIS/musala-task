import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors, commonStyles } from '../../theme';
import { NewsItemProps } from './types';
import CustomImage from '../../components/customImage';

const NewsItem: React.FC<NewsItemProps> = ({ title, image, onPressCB }) => {
  return (
    <TouchableOpacity
      style={[commonStyles.flex, commonStyles.shadow, styles.container]}
      activeOpacity={0.7}
      onPress={onPressCB}
    >
      <CustomImage url={image} style={styles.image} />
      <Text style={[commonStyles.flex, styles.text]}>{title}</Text>
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
  },
  image: {
    width: RFValue(100),
    height: RFValue(80),
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
