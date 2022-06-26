import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors, commonStyles } from '../../theme';
import { NewsItemProps } from './types';

const NewsItem: React.FC<NewsItemProps> = ({ title, image }: NewsItemProps) => {
  return (
    <TouchableOpacity
      style={[commonStyles.flex, styles.container]}
      activeOpacity={0.7}
    >
      <FastImage source={{ uri: image }} style={styles.image} />
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
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
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
