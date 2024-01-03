import { View, Text, StyleProp, TextStyle } from 'react-native';
import React, { PropsWithChildren } from 'react';

interface StatCategoryTextProps extends PropsWithChildren {
  title: string;
}

const StatCategoryText = ({ title, children }: StatCategoryTextProps) => {
  const titleStyle: StyleProp<TextStyle> = {
    color: '#B1B1B1',
    fontSize: 10,
    fontFamily: 'Jost_600SemiBold',
  };

  const valueTextStyle: StyleProp<TextStyle> = {
    fontFamily: 'Jost_700Bold',
    alignSelf: 'center',
    color: '#787878',
    fontWeight: 'bold',
    fontSize: 16,
  };

  return (
    <View>
      <Text style={titleStyle}>{title.toUpperCase()}</Text>
      {typeof children === 'string' ? (
        <Text style={valueTextStyle}>{children}</Text>
      ) : (
        children
      )}
    </View>
  );
};

export default StatCategoryText;
