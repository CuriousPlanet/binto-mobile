import React from 'react';
import { Stack, useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useAppDataStore from '../_hooks/useAppDataStore';
import Alert from '../_utils/Alert';

const _layout = () => {
  const router = useRouter();
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
          headerRight() {
            return (
              <MaterialCommunityIcons
                size={28}
                color="#CDCDCD"
                name="cellphone-nfc-off"
                onPress={() =>
                  Alert.SKIP_ACCOUNT_CREATION(() => router.replace('/profile'))
                }
              />
            );
          },
          headerTitleStyle: { color: '#777', fontFamily: 'Jost_700Bold' },
          headerStyle: {
            backgroundColor: 'transparent',
          },
          contentStyle: {
            backgroundColor: 'transparent',
          },
        }}
      >
        <Stack.Screen
          name="login"
          options={{ headerTitle: 'Log-in or Sign up' }}
        />
        <Stack.Screen
          name="intro"
          options={{ headerTitle: "Let's get you set up!" }}
        />
      </Stack>
    </LinearGradient>
  );
};

export default _layout;
