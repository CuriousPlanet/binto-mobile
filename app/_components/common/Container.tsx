import { View, Text } from 'react-native';
import React, { PropsWithChildren } from 'react';

const Container = ({ children }: PropsWithChildren) => {
  return (
    <View
      style={{
        width: '75%',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
        height: '100%',
      }}
    >
      {children}
    </View>
  );
};

export default Container;
