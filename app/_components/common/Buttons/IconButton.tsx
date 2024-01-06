import { Pressable, PressableProps, StyleProp, TextStyle } from 'react-native';
import React, { ComponentProps } from 'react';
import { merge } from 'lodash';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface IconButtonProps extends PressableProps {
  icon: ComponentProps<typeof MaterialCommunityIcons>['name'];
  size?: number;
  style?: StyleProp<TextStyle>;
}

const IconButton = ({ icon, size, style, ...props }: IconButtonProps) => {
  const buttonStyle: StyleProp<TextStyle> = {
    backgroundColor: '#4865FF',
    borderRadius: 9999,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <Pressable style={merge(buttonStyle, style)} {...props}>
      <MaterialCommunityIcons name={icon} size={size ?? 24} color="white" />
    </Pressable>
  );
};

export default IconButton;
