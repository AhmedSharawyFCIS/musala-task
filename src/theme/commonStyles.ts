import { StyleSheet } from 'react-native';
import colors from './colors';
import { Style } from './types';

const commonStyles = StyleSheet.create<Style>({
  flex: {
    flex: 1,
  },
  flexGrow: {
    flexGrow: 1,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});

export default commonStyles;
