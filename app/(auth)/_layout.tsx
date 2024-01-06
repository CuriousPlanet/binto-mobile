import React from 'react';
import { Tabs } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import FlagIcon from '../_components/common/FlagIcon';

const _layout = () => {
  return (
    <LinearGradient
      start={[0.5, 0]}
      end={[0.5, 1]}
      style={{ height: '100%' }}
      colors={['white', '#F9FCFF']}
    >
      <Tabs
        sceneContainerStyle={{ backgroundColor: 'transparent' }}
        screenOptions={{
          headerShadowVisible: false,
          headerShown: true,
          headerTitleStyle: { color: '#777', fontFamily: 'Jost_700Bold' },
          headerStyle: {
            backgroundColor: 'transparent',
          },
          tabBarStyle: {
            borderTopWidth: 0,
          },
          tabBarLabelStyle: {
            textTransform: 'uppercase',
            fontFamily: 'Jost_600SemiBold',
          },
          tabBarActiveTintColor: '#4865FF',
          tabBarInactiveTintColor: '#363636',
        }}
      >
        <Tabs.Screen
          name="map"
          options={{
            headerTitle: 'Earth',
            tabBarLabel: 'Earth',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="earth" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="posts"
          options={{
            headerTitle: 'Journal',
            tabBarLabel: 'Journal',
            tabBarIcon: ({ color, size }) => (
              <FlagIcon
                style={{
                  width: size,
                  height: size,
                  borderWidth: 2,
                  borderColor: color,
                  borderRadius: 9999,
                  overflow: 'hidden',
                }}
                country="SE"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            headerTitle: 'Me',
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </LinearGradient>
  );
};

export default _layout;
