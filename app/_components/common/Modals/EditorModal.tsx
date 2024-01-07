import React, { forwardRef } from 'react';
import BaseBottomSheetModal from './BaseBottomSheetModal';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import Editor from '../../ui/Editor';

const EditorModal = forwardRef<BottomSheetModal>((props, ref) => {
  return (
    <BaseBottomSheetModal
      snapPoints={['40%', '50%', '85%']}
      keyboardBehavior="extend"
      index={1}
      ref={ref}
    >
      <Editor />
    </BaseBottomSheetModal>
  );
});

export default EditorModal;
