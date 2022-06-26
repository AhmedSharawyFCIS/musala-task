import { StyleSheet } from 'react-native';
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
});

export default commonStyles;
