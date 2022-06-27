import React from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { translate } from '../../helpers';
import { colors, commonStyles } from '../../theme';
import { Props } from './types';

const Wrapper: React.FC<Props> = ({
  loading,
  error,
  data,
  onRefresh,
  children,
}) => {
  const message = error
    ? translate('something-went-wrong')
    : translate('empty-data');
  if (loading) {
    return (
      <View style={[commonStyles.flex, commonStyles.centerContent]}>
        <ActivityIndicator color={colors.primary} />
      </View>
    );
  }
  if (error || data?.length === 0) {
    return (
      <ScrollView
        contentContainerStyle={[
          commonStyles.flexGrow,
          commonStyles.centerContent,
        ]}
        refreshControl={
          <RefreshControl
            colors={[colors.primary]}
            tintColor={colors.primary}
            refreshing={false}
            onRefresh={() => onRefresh()}
          />
        }
      >
        <Text>{message}</Text>
      </ScrollView>
    );
  }
  return <View style={commonStyles.flex}>{children}</View>;
};

export default Wrapper;

const styles = StyleSheet.create({});
