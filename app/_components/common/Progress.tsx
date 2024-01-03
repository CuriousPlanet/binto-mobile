import { StyleProp, View, ViewStyle } from 'react-native';
import React from 'react';
import { merge } from 'lodash';

interface ProgressProps {
  progress: number;
  style: StyleProp<ViewStyle>;
}

const Progress = ({ progress, style }: ProgressProps) => {
  const progressBarStyle: StyleProp<ViewStyle> = {
    borderRadius: 9999,
    width: 200,
    height: 12,
    backgroundColor: '#F3F3F3',
  };

  const progressStyle: StyleProp<ViewStyle> = {
    borderRadius: 9999,
    width: `${progress * 100}%`,
    height: '100%',
    position: 'relative',
    backgroundColor: '#4865FF',
  };

  return (
    <View style={merge(progressBarStyle, style)}>
      <View style={progressStyle} />
    </View>
  );
};

export default Progress;
