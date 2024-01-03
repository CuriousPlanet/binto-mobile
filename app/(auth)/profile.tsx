import { View, Text } from 'react-native';
import React from 'react';
import Avatar from '../_components/common/Avatar';
import { SafeAreaView } from 'react-native-safe-area-context';
import StatCategoryText from '../_components/common/StatCategoryText';
import Progress from '../_components/common/Progress';
import VerticalCountrySelector from '../_components/common/VerticalCountrySelector';
import Container from '../_components/common/Container';

const profile = () => {
  return (
    <SafeAreaView>
      <Container>
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

        <View
          style={{
            flexDirection: 'row',
            columnGap: 24,
            marginTop: 16,
            marginBottom: 16,
            width: '100%',
          }}
        >
          <StatCategoryText title="Achievements">2</StatCategoryText>
          <StatCategoryText title="Level 2" style={{ flex: 1 }}>
            <Progress style={{ marginTop: 6, width: '100%' }} progress={0.5} />
          </StatCategoryText>
        </View>

        <View style={{ width: '100%' }}>
          <StatCategoryText title="Countries">
            <VerticalCountrySelector countries={['SE', 'GB', 'PL', 'CA']} />
          </StatCategoryText>
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default profile;
