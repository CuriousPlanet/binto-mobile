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
    paddingRight: 20,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: '#CECECE',
    borderRadius: 8,
    fontSize: 14,
    minHeight: 48,
    fontFamily: 'Jost_700Bold',
  };

  const labelStyles: StyleProp<TextStyle> = {
    marginBottom: 2,
  };

  return (
    <View style={{ width: '100%' }}>
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
