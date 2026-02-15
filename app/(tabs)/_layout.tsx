
import { Tabs } from 'expo-router';
import React from 'react';
import { Foundation, Ionicons } from '@expo/vector-icons';

import { useColorScheme } from '../hooks/use-color-scheme';
import { Colors } from '../constants/theme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Foundation name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="subjects"
        options={{
          title: 'Subjects',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="library-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: 'Stats',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="stats-chart-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
