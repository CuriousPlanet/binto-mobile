import { Pressable, PressableProps, StyleProp, TextStyle } from 'react-native';
import React, { ComponentProps } from 'react';
import { merge } from 'lodash';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SvgProps } from 'react-native-svg';

interface IconButtonProps extends PressableProps {
  icon:
    | ComponentProps<typeof MaterialCommunityIcons>['name']
    | React.FC<SvgProps>;
  size?: number;
  style?: StyleProp<TextStyle>;
}

const IconButton = ({ icon: Icon, size, style, ...props }: IconButtonProps) => {
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
      {typeof Icon === 'string' ? (
        <MaterialCommunityIcons name={Icon} size={size ?? 24} color="white" />
      ) : (
        <Icon />
      )}
    </Pressable>
  );
};

export default IconButton;
