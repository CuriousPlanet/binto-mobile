import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import useKeyboardStatus from '../../_hooks/useKeyboardStatus';
import Editor from './Editor';

interface PostSequenceAttachment {
  type: 'image' | 'video' | 'youtube';
  source: string;
}

const PostEditor = () => {
  const isKeyboardOpen = useKeyboardStatus();

  return (
    <View style={{ height: '100%' }}>
      <Editor />
    </View>
  );
};

export default PostEditor;
