import {
  View,
  ScrollView,
  Image,
  TextInputKeyPressEventData,
  NativeSyntheticEvent,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import React, {
  Children,
  JSXElementConstructor,
  PropsWithChildren,
  ReactElement,
  RefObject,
  createRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { BottomSheetTextInput, useBottomSheet } from '@gorhom/bottom-sheet';
import useKeyboardStatus from '../../../../_hooks/useKeyboardStatus';
import { clone, get, isEqual, last, pullAt, times, update } from 'lodash';
import YoutubeIframe from 'react-native-youtube-iframe';
import useAppDataStore from '../../../../_hooks/useAppDataStore';
import PostDraftEntity from '../../../../_entities/PostDraftEntity';
import { EditorBaseContext } from './context';

export interface PostSequenceAttachment {
  type: 'image' | 'video' | 'youtube';
  source: string;
}

const EditorBase = ({ children }: PropsWithChildren) => {
  const { draft, setDraft } = useAppDataStore();
  const { title, sequence, setTitle, setSequence } =
    useContext(EditorBaseContext);

  const compoundPieces = Children.toArray(children).filter(
    (c) => typeof c === 'object'
  ) as ReactElement<any, string | JSXElementConstructor<any>>[];

  const HeaderSlot = compoundPieces.find(
    (c) => get(c.type, 'name') === 'Header'
  );

  const KeyboardAccessoryViewSlot = compoundPieces.find(
    (c) => get(c.type, 'name') === 'KeyboardAccessoryView'
  );

  const refs = useRef([]);

  const [selection, setSelection] = useState<{
    start: number;
    end: number;
  } | null>(null);

  const isKeyboardOpen = useKeyboardStatus();
  const { snapToIndex } = useBottomSheet();

  const handleTextUpdate = (text: string, index: number) => {
    setSequence((prev) => update(clone(prev), index, () => text));
  };

  const handleTextKeyPress = (
    { nativeEvent }: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    const value = sequence[index];
    // Super ugly if statement that should be fixed eventually
    if (
      (nativeEvent.key === 'Backspace' &&
        typeof value === 'string' &&
        selection?.start === 0 &&
        selection?.end === 0) ||
      (typeof value === 'string' &&
        value.length === 0 &&
        nativeEvent.key === 'Backspace')
    ) {
      setSequence((prev) => {
        const newSequence = clone(prev);
        pullAt(newSequence, index - 1);
        return newSequence;
      });
    }
  };

  const handleJumpToLastTextInput = () => {
    const lastTextInput = last(
      sequence.filter((item) => typeof item === 'string')
    );

    if (lastTextInput === undefined) return;

    const index = sequence.lastIndexOf(lastTextInput);
    const { current: textInput }: RefObject<TextInput> = refs.current[index];

    textInput?.focus();
  };

  useEffect(() => {
    const lastSequenceItem = last(sequence);
    let newSequence = clone(sequence);

    if (typeof lastSequenceItem === 'object') {
      newSequence.push('');
    }

    for (let i = 0; i < newSequence.length; i++) {
      const itemA = newSequence[i];
      const itemB = newSequence[i + 1];
      if (typeof itemA === 'string' && typeof itemB === 'string') {
        newSequence = update(newSequence, i, () => itemA + itemB);
        pullAt(newSequence, i + 1);
      }
    }

    refs.current = times(
      newSequence.length,
      (index) => refs.current[index] || createRef()
    );

    if (!isEqual(sequence, newSequence)) setSequence(newSequence);
  }, [sequence]);

  useEffect(() => {
    const isEmpty = !title && sequence.length === 1 && sequence[0] === '';
    setDraft(isEmpty ? null : new PostDraftEntity([], title, sequence));
  }, [title, sequence]);

  useEffect(() => {
    if (!isKeyboardOpen) {
      snapToIndex(2);
    }
  }, [isKeyboardOpen]);

  return (
    <TouchableWithoutFeedback
      style={{ height: '100%' }}
      onPress={handleJumpToLastTextInput}
    >
      <View style={{ height: '100%' }}>
        <ScrollView
          style={{
            paddingLeft: 16,
            paddingRight: 16,
            flexDirection: 'column',
            flexGrow: 1,
          }}
        >
          {HeaderSlot}
          <BottomSheetTextInput
            placeholder="A great new story headline"
            scrollEnabled={false}
            onChangeText={setTitle}
            defaultValue={draft?.title}
            enablesReturnKeyAutomatically={true}
            multiline
            style={{
              fontFamily: 'Jost_600SemiBold',
              fontSize: 28,
              textAlign: 'justify',
              maxWidth: '100%',
              marginBottom: 12,
            }}
          />
          <View style={{ height: '100%' }}>
            {sequence.map((value, index) => {
              if (typeof value === 'string') {
                return (
                  <BottomSheetTextInput
                    key={index}
                    onChangeText={(text) => handleTextUpdate(text, index)}
                    onKeyPress={(e) => handleTextKeyPress(e, index)}
                    placeholder={index === 0 ? 'So the story begins ...' : ''}
                    multiline
                    ref={refs.current[index]}
                    enablesReturnKeyAutomatically={true}
                    onSelectionChange={({ nativeEvent }) =>
                      setSelection(nativeEvent.selection)
                    }
                    defaultValue={value}
                    onFocus={() => setSelection(null)}
                    onBlur={() => setSelection({ start: 0, end: 0 })}
                    scrollEnabled={false}
                    textContentType="none"
                    dataDetectorTypes="all"
                    style={{
                      fontSize: 16,
                      lineHeight: 20,
                      flexGrow: sequence.length - 1 === index ? 1 : 0,
                    }}
                  />
                );
              } else {
                switch (value.type) {
                  case 'image':
                    return (
                      <Image
                        ref={refs.current[index]}
                        key={index}
                        style={{
                          height: 200,
                          width: '100%',
                          marginTop: 16,
                          marginBottom: 16,
                          borderRadius: 8,
                        }}
                        resizeMethod="resize"
                        source={{ uri: value.source }}
                      />
                    );
                  case 'video':
                    return <></>;
                  case 'youtube':
                    return (
                      <View
                        ref={refs.current[index]}
                        key={index}
                        style={{
                          overflow: 'hidden',
                          marginTop: 16,
                          marginBottom: 16,
                          borderRadius: 8,
                          width: '100%',
                        }}
                      >
                        <YoutubeIframe
                          videoId={value.source}
                          height={200}
                          play={false}
                          webViewStyle={{
                            width: '100%',
                            pointerEvents: 'none',
                          }}
                        />
                      </View>
                    );
                }
              }
            })}
          </View>
        </ScrollView>
        {Boolean(isKeyboardOpen) && KeyboardAccessoryViewSlot}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default EditorBase;
