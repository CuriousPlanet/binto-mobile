import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const _layout = () => {
  return (
    <LinearGradient
      start={[0.5, 0]}
      end={[0.5, 1]}
      style={{ height: '100%' }}
      colors={['white', '#F9FCFF']}
    >
      <Stack
        screenOptions={{
          headerShadowVisible: false,
          headerShown: true,
          headerTitleStyle: { color: '#777', fontFamily: 'Jost_700Bold' },
          headerStyle: {
            backgroundColor: 'transparent',
          },
          contentStyle: {
            backgroundColor: 'transparent',
          },
        }}
      >
        <Stack.Screen name="login" options={{ headerTitle: 'Login' }} />
      </Stack>
    </LinearGradient>
  );
};

export default _layout;
