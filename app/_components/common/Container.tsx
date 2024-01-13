import { View } from 'react-native';
import React, { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ContainerProps extends PropsWithChildren {
  center?: boolean;
}

const Container = ({ children, center }: ContainerProps) => {
  return (
    <SafeAreaView
      style={{
        width: '85%',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: '100%',
        flex: 1,
        alignItems: center ? 'center' : 'flex-start',
      }}
    >
      {children}
    </SafeAreaView>
  );
};

export default Container;
