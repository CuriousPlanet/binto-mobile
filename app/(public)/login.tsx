import React from 'react';
import TextInput from '../_components/common/TextInput';
import TextButton from '../_components/common/Buttons/TextButton';
import Container from '../_components/common/Container';
import { Text, View } from 'react-native';
import CampfireSVG from '../../assets/scenes/campfire.svg';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import VerticalEqualWidthGrid from '../_components/common/VerticalEqualWidthGrid';
import IconButton from '../_components/common/Buttons/IconButton';
import DiscordSVG from '../../assets/icons/discord.svg';
import LoginForm from '../_components/ui/LoginForm';

const login = () => {
  return (
    <KeyboardAwareScrollView extraScrollHeight={90} scrollEnabled={false}>
      <Container>
        <CampfireSVG style={{ aspectRatio: 1 }} width={'100%'} />
        <Text
          style={{
            fontFamily: 'Jost_900Black',
            textAlign: 'center',
            fontSize: 21,
            marginTop: 16,
            marginBottom: 24,
            color: '#393939',
          }}
        >
          Safe-keep your stories in the cloud with a{' '}
          <Text style={{ color: '#4865FF' }}>free Binto-account</Text>
        </Text>

        <LoginForm />
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default login;
