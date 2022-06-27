import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors, commonStyles } from '../../theme';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { SearchProps } from './types';
const Search: React.FC<SearchProps> = ({ searchText, setSearchTextCB }) => {
  return (
    <View style={[commonStyles.shadow, styles.container]}>
      <EvilIcons name="search" color={colors.grey} size={RFValue(25)} />
      <TextInput
        style={commonStyles.flex}
        value={searchText}
        onChangeText={setSearchTextCB}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: RFValue(45),
    marginHorizontal: RFValue(10),
    borderRadius: RFValue(6),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: RFValue(8),
    marginVertical: RFValue(20),
  },
});
