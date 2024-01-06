import {
  View,
  Text,
  TextInputKeyPressEventData,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInput,
} from 'react-native';
import React, { ComponentType, forwardRef, useRef, useState } from 'react';
import BaseBottomSheetModal from './BaseBottomSheetModal';
import { BottomSheetModal, BottomSheetTextInput } from '@gorhom/bottom-sheet';
import useKeyboardStatus from '../../../_hooks/useKeyboardStatus';
import { ScrollView } from 'react-native-gesture-handler';
import { BottomSheetTextInputProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetTextInput';
import PostEditor from '../../ui/PostEditor';

const EditorModal = forwardRef<BottomSheetModal>((props, ref) => {
  return (
    <BaseBottomSheetModal
      snapPoints={['40%', '50%', '85%']}
      keyboardBehavior="extend"
      index={1}
      ref={ref}
    >
      <PostEditor />
    </BaseBottomSheetModal>
  );
});

export default EditorModal;
