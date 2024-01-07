import { View } from 'react-native';
import React, { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Container = ({ children }: PropsWithChildren) => {
  return (
    <SafeAreaView
      style={{
        width: '85%',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',
        height: '100%',
        flex: 1,
      }}
    >
      {children}
    </SafeAreaView>
  );
};

export default Container;
