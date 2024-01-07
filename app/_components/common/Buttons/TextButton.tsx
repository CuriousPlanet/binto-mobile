import {
  Text,
  Pressable,
  PressableProps,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import { merge } from 'lodash';

interface TextButtonProps extends PressableProps {}

const TextButton = ({ children, style, ...props }: TextButtonProps) => {
  if (typeof children !== 'string') {
    throw new Error('TextButton children must be type of string');
  }

  const stylesheet = StyleSheet.create({
    pressable: {
      backgroundColor: '#4865FF',
      borderRadius: 8,
      overflow: 'hidden',
      height: 48,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontFamily: 'Jost_600SemiBold',
      fontSize: 16,
      color: 'white',
    },
  });

  return (
    <View style={{ width: '100%' }}>
      <Pressable style={merge(style, stylesheet.pressable)} {...props}>
        <Text style={stylesheet.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default TextButton;
