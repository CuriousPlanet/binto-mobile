import { View, Text } from 'react-native';
import React, { PropsWithChildren, forwardRef } from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProps,
} from '@gorhom/bottom-sheet';
import { LinearGradient } from 'expo-linear-gradient';

const BaseBottomSheetModal = forwardRef<
  BottomSheetModal,
  BottomSheetModalProps & PropsWithChildren
>(({ children, ...props }, ref) => {
  return (
    <BottomSheetModal
      ref={ref}
      {...props}
      backdropComponent={(props) => (
        <BottomSheetBackdrop
          {...props}
          opacity={0.5}
          enableTouchThrough={true}
        />
      )}
      enablePanDownToClose={true}
    >
      <View>{children}</View>
    </BottomSheetModal>
  );
});

export default BaseBottomSheetModal;
