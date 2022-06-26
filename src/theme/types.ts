import { ViewStyle, TextStyle } from 'react-native';

export interface Style {
  flex: ViewStyle | TextStyle;
  flexGrow: ViewStyle;
  centerContent: ViewStyle;
}
