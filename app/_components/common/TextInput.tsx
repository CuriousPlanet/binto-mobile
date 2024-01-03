import {
  TextInput as BaseTextInput,
  TextInputProps as BaseTextInputProps,
  StyleProp,
  Text,
  TextStyle,
  View,
} from 'react-native';
import React from 'react';
import { merge } from 'lodash';

interface TextInputProps extends BaseTextInputProps {
  label?: string;
}

const TextInput = ({ label, style, ...props }: TextInputProps) => {
  const inputStyles: StyleProp<TextStyle> = {
    color: 'black',
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 8,
    fontSize: 16,
  };

  const labelStyles: StyleProp<TextStyle> = {
    marginBottom: 2,
  };

  return (
    <View>
      {Boolean(label) && <Text style={labelStyles}>{label}</Text>}
      <BaseTextInput
        {...props}
        autoCapitalize="none"
        style={merge(inputStyles, style)}
      />
    </View>
  );
};

export default TextInput;
