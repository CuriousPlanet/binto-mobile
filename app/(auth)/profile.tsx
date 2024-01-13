import { View, Text, ScrollView } from 'react-native';
import React, { useRef } from 'react';
import Avatar from '../_components/common/Avatar';
import StatCategoryText from '../_components/common/StatCategoryText';
import Progress from '../_components/common/Progress';
import VerticalCountrySelector from '../_components/ui/profile/VerticalCountrySelector';
import Container from '../_components/common/Container';
import IconButton from '../_components/common/Buttons/IconButton';
import ProfilePostEntry from '../_components/ui/profile/ProfilePostEntry';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import EditorModal from '../_components/common/Modals/EditorModal';
import useAppDataStore from '../_hooks/useAppDataStore';

const Profile = () => {
  const user = useAppDataStore();
  const editorModalRef = useRef<BottomSheetModal>(null);

  return (
    <>
      <Container center>
        <Text onPress={() => user.setFirstName('')}>reset user</Text>
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
          {user.firstName}
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

        <View>
          <ScrollView>
            <ProfilePostEntry heading="Completing my Scandinavia trip in Stockholm" />
            <ProfilePostEntry heading="Visiting the nordic reindeers up in Arvidsjaur!" />
            <ProfilePostEntry heading="Arriving in Umeå!" />
            <ProfilePostEntry heading="Arriving in Stockholm!" />
          </ScrollView>
        </View>
      </Container>

      <IconButton
        icon="pencil"
        size={32}
        onPress={() => editorModalRef.current?.present()}
        style={{
          width: 64,
          height: 64,
          position: 'absolute',
          bottom: 0,
          right: 0,
          margin: 16,
          zIndex: 99,
        }}
      />

      <EditorModal ref={editorModalRef} />
    </>
  );
};

export default Profile;
