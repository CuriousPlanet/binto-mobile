import { View } from 'react-native';
import React from 'react';
import { SvgProps } from 'react-native-svg';

interface OAuthMethodButton {
  icon: React.FC<SvgProps>;
  method?: string;
}

const OAuthMethodButton = ({ icon: Icon }: OAuthMethodButton) => {
  return (
    <View
      style={{
        width: '100%',
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 1,
        borderColor: '#CDCDCD',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
      }}
    >
      <Icon width={28} height={28} />
    </View>
  );
};

export default OAuthMethodButton;
