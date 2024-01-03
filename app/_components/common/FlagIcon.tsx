import React from 'react';
import { FlagSVGs1x1 } from '../../../utils/flags';
import { ImageProps } from 'react-native-svg';
import { StyleProp, View, ViewStyle } from 'react-native';

interface FlagIconProps extends Omit<ImageProps, 'source'> {
  country: string;
  style: StyleProp<ViewStyle>;
}

const FlagIcon = ({ country, style, ...props }: FlagIconProps) => {
  const { default: Component } =
    FlagSVGs1x1[country as keyof typeof FlagSVGs1x1];
  return (
    <View style={style}>
      <Component {...props} />
    </View>
  );
};

export default FlagIcon;
