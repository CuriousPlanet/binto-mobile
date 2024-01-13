import { View } from 'react-native';
import React, { PropsWithChildren } from 'react';

export const Header = ({ children }: PropsWithChildren) => {
  return <View>{children}</View>;
};

export const KeyboardAccessoryView = ({ children }: PropsWithChildren) => {
  return <View>{children}</View>;
};
