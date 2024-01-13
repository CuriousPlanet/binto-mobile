import { Image, Text } from 'react-native';
import React from 'react';
import Container from '../../_components/common/Container';
import SimpleGrid from '../../_components/common/SimpleGrid';
import Avatar from '../../_components/common/Avatar';

const Intro = () => {
  return (
    <Container>
      <SimpleGrid elementsPerRow={2}>
        <Avatar source={1} />
      </SimpleGrid>
    </Container>
  );
};

export default Intro;
