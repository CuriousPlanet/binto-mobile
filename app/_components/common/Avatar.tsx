import {
  Image,
  StyleProp,
  ImageStyle,
  ImageProps,
  View,
  ButtonProps,
  TextStyle,
  Pressable,
  Text,
} from 'react-native';
import React from 'react';
import { merge } from 'lodash';

interface AvatarProps extends ImageProps {
  button?: string;
}

const Avatar = ({ button, style, ...props }: AvatarProps) => {
  const avatarStyle: StyleProp<ImageStyle> = {
    borderRadius: 9999,
    width: 200,
    height: 200,
  };

  const buttonStyle: StyleProp<TextStyle> = {
    backgroundColor: '#363636',
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 9999,
    alignSelf: 'center',
    transform: 'translateY(-25px)',
  };

  return (
    <View>
      <Image {...props} style={merge(avatarStyle, style)} />
      {Boolean(button) && (
        <Pressable style={buttonStyle}>
          <Text style={{ color: 'white', fontSize: 10 }}>{button}</Text>
        </Pressable>
      )}
    </View>
  );
};

export default Avatar;
