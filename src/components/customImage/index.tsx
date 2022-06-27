import React, { useState } from 'react';
import FastImage from 'react-native-fast-image';
import { Props } from './types';

const CustomImage: React.FC<Props> = ({ url, style }) => {
  const [isErrorImage, setErrorImage] = useState<boolean>(false);

  const source = isErrorImage
    ? require('../../assets/images/noImage.jpeg')
    : { uri: url };
  return (
    <FastImage
      source={source}
      style={style}
      onError={() => setErrorImage(true)}
    />
  );
};

export default CustomImage;
