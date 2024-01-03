import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const _layout = () => {
  return (
    <Stack
      screenOptions={{
        // headerTransparent: true,
        headerShown: true,
        headerTitleStyle: { color: '#777' },
        headerStyle: {
          backgroundColor: 'transparent',
        },
        contentStyle: {
          backgroundColor: 'transparent',
        },
      }}
    >
      <Stack.Screen name="profile" options={{ headerTitle: 'Profile' }} />
    </Stack>
  );
};

export default _layout;
