import { View, Text, StyleProp, TextStyle } from 'react-native';
import React from 'react';
import { ViewStyle } from '@bacons/react-views';

interface ProfilePostEntryProps {
  heading: string;
}

const ProfilePostEntry = ({ heading }: ProfilePostEntryProps) => {
  const containerText: StyleProp<ViewStyle> = {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  };

  const headingText: StyleProp<TextStyle> = {
    fontFamily: 'Jost_600SemiBold',
    fontSize: 16,
  };

  const dateText: StyleProp<TextStyle> = {
    position: 'absolute',
    left: 0,
    transform: 'translateX(-0px)',
    color: '#A6A6A6',
    fontSize: 10,
    fontFamily: 'Jost_600SemiBold',
  };

  const date = new Date();

  const temp = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];

  return (
    <View style={containerText}>
      <Text style={headingText}>{heading}</Text>
    </View>
  );
};

export default ProfilePostEntry;
