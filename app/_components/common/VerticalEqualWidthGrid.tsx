import { View, StyleSheet, LayoutChangeEvent, ViewProps } from 'react-native';
import React, { Children, PropsWithChildren, useState } from 'react';
import { merge } from 'lodash';

interface VerticalEqualWidthGridProps extends ViewProps {
  gap?: number;
}

const VerticalEqualWidthGrid = ({
  children,
  style,
  gap = 0,
}: VerticalEqualWidthGridProps) => {
  const [width, setWidth] = useState(0);

  const handleLayout = ({ nativeEvent: { layout } }: LayoutChangeEvent) => {
    setWidth(layout.width);
  };

  const childrenArray = Children.toArray(children);

  const stylesheet = StyleSheet.create({
    grid: {
      width: '100%',
      flexDirection: 'row',
      columnGap: gap,
    },
    gridItem: {
      width: (width - (childrenArray.length - 1) * gap) / childrenArray.length,
    },
  });

  return (
    <View onLayout={handleLayout} style={merge(stylesheet.grid, style)}>
      {childrenArray.map((child, i) => {
        return (
          <View style={stylesheet.gridItem} key={i}>
            {child}
          </View>
        );
      })}
    </View>
  );
};

export default VerticalEqualWidthGrid;
