import { View } from 'react-native';
import React from 'react';
import VerticalEqualWidthGrid from '../../common/VerticalEqualWidthGrid';
import TextButton from '../../common/Buttons/TextButton';
import TextInput from '../../common/TextInput';
import OAuthMethodButton from './OAuthMethodButton';
import AppleSVG from '../../../../assets/icons/apple.svg';
import GoogleSVG from '../../../../assets/icons/google.svg';
import DiscordSVG from '../../../../assets/icons/discord.svg';

const LoginForm = () => {
  return (
    <View style={{ width: '100%' }}>
      <TextInput
        keyboardType="email-address"
        textContentType="emailAddress"
        placeholder="Email"
      />
      <TextButton style={{ marginTop: 12, marginBottom: 12 }}>
        Continue
      </TextButton>

      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#CDCDCD',
          marginBottom: 16,
        }}
      />

      <VerticalEqualWidthGrid gap={8}>
        <OAuthMethodButton icon={AppleSVG} />
        <OAuthMethodButton icon={GoogleSVG} />
        <OAuthMethodButton icon={DiscordSVG} />
      </VerticalEqualWidthGrid>
    </View>
  );
};

export default LoginForm;
