import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import useAppDataStore from '../../../_hooks/useAppDataStore';
import EditorBase from './base';
import { format } from 'date-fns';
import { clone, sumBy } from 'lodash';
import { EditorBaseContext } from './base/context';
import * as ImagePicker from 'expo-image-picker';
import IconButton from '../../common/Buttons/IconButton';
import Alert from '../../../_utils/Alert';
import { Alert as BaseAlert } from 'react-native';

const KeyboardAccessoryView = () => {
  const { sequence, setSequence } = useContext(EditorBaseContext);

  const wordCount = sumBy(
    sequence.filter((s) => typeof s === 'string') as string[],
    (str) => str.length
  );

  const handleGallery = async () => {
    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
      selectionLimit: 1,
    });

    if (!res.assets) {
      if (!res.canceled) alert('Something went wrong');
      return;
    }

    const newSequence = clone(sequence);
    const asset = res.assets[0];

    if (asset.type) {
      newSequence.push({ type: asset.type, source: asset.uri });
      setSequence(newSequence);
    }
  };

  const handleYouTube = async () => {
    const answer = await Alert.PROMPT_YOUTUBE_LINK();

    try {
      const url = new URL(answer);
      const params = new URLSearchParams(url.search.substring(1));
      const videoId = params.get('v');

      if (!videoId) throw new Error('Video does not exist');

      setSequence((prev) => {
        const newSequence = clone(prev);
        newSequence.push({ type: 'youtube', source: videoId });
        return newSequence;
      });
    } catch (e) {
      if (e instanceof Error) {
        BaseAlert.alert('Something went wrong', e.message);
      }
    }
  };

  return (
    <View
      style={{
        padding: 8,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#eee',
        flexDirection: 'row',
      }}
    >
      <View style={{ flexDirection: 'row', columnGap: 5 }}>
        <IconButton
          size={20}
          style={{ width: 28, height: 28 }}
          onPress={handleGallery}
          icon="image"
        />
        <IconButton
          size={20}
          style={{ width: 28, height: 28 }}
          onPress={handleGallery}
          icon="video"
        />
        <IconButton
          size={20}
          style={{ width: 28, height: 28 }}
          onPress={handleYouTube}
          icon="youtube"
        />
      </View>

      <Text
        style={{
          marginLeft: 'auto',
          color: wordCount > 2000 ? 'red' : 'black',
        }}
      >
        {wordCount}
      </Text>
    </View>
  );
};

const Editor = () => {
  const { draft } = useAppDataStore();
  return (
    <EditorBase.Provider>
      <EditorBase.View>
        <EditorBase.Header>
          {draft?.draftLastUpdated && (
            <Text style={{ color: '#ccc', fontSize: 12 }}>
              Draft updated &mdash;&nbsp;
              {format(draft.draftLastUpdated, 'yyyy-MM-dd')}
            </Text>
          )}

          <View style={{ marginTop: 10 }}>
            <Text style={{ color: '#4865FF', fontSize: 14 }}>
              Sweden 🇸🇪 &bull; Add location 📍
            </Text>
          </View>
        </EditorBase.Header>
        <EditorBase.KeyboardAccessoryView>
          <KeyboardAccessoryView />
        </EditorBase.KeyboardAccessoryView>
      </EditorBase.View>
    </EditorBase.Provider>
  );
};

export default Editor;
