import { View, Text } from 'react-native';
import React, { Children, PropsWithChildren } from 'react';
import { chunk } from 'lodash';
import VerticalEqualWidthGrid from './VerticalEqualWidthGrid';

interface GridProps extends PropsWithChildren {
  elementsPerRow: number;
}

const SimpleGrid = ({ children, elementsPerRow }: GridProps) => {
  const childrenArray = Children.toArray(children);
  return chunk(childrenArray, elementsPerRow).map((el, columnId) => (
    <VerticalEqualWidthGrid key={columnId}>{el}</VerticalEqualWidthGrid>
  ));
};

export default SimpleGrid;
