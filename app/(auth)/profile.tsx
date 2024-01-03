import { View, Text } from 'react-native';
import React from 'react';
import Avatar from '../_components/common/Avatar';
import { SafeAreaView } from 'react-native-safe-area-context';
import StatCategoryText from '../_components/common/StatCategoryText';
import Progress from '../_components/common/Progress';
import VerticalCountrySelector from '../_components/common/VerticalCountrySelector';

const profile = () => {
  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
      }}
    >
      <Avatar
        button="Manage profile"
        source={require('../../assets/avatar.png')}
      />
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          fontFamily: 'Jost_600SemiBold',
        }}
      >
        Jessica M.
      </Text>

      <View style={{ flexDirection: 'row', columnGap: 24, marginTop: 8 }}>
        <StatCategoryText title="Achievements">2</StatCategoryText>
        <StatCategoryText title="Level 2">
          <Progress style={{ marginTop: 6 }} progress={0.5} />
        </StatCategoryText>
      </View>

      <View>
        <StatCategoryText title="Countries">
          <VerticalCountrySelector countries={['SE', 'GB', 'PL', 'CA']} />
        </StatCategoryText>
      </View>
    </SafeAreaView>
  );
};

export default profile;
