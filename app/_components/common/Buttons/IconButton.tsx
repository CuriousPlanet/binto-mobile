import { Pressable, StyleProp, TextStyle } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { merge } from 'lodash';

interface IconButtonProps {
  icon: string;
  style?: StyleProp<TextStyle>;
}

const IconButton = ({ icon, style }: IconButtonProps) => {
  const buttonStyle: StyleProp<TextStyle> = {
    backgroundColor: '#4865FF',
    borderRadius: 9999,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <Pressable style={merge(buttonStyle, style)}>
      <Icon name={icon} size={24} color="white" />
    </Pressable>
  );
};

export default IconButton;
