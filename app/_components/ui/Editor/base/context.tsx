import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from 'react';
import { PostContentSequenceFormat } from '../../../../_entities/PostEntity';
import { PostSequenceAttachment } from './View';
import useAppDataStore from '../../../../_hooks/useAppDataStore';

interface EditorBaseContextData {
  title: string;
  sequence: PostContentSequenceFormat;
  setTitle: Dispatch<SetStateAction<string>>;
  setSequence: Dispatch<SetStateAction<PostContentSequenceFormat>>;
}

const defaultSetter: () => void = () => {};

export const EditorBaseContext = createContext<EditorBaseContextData>({
  title: '',
  sequence: [''],
  setTitle: defaultSetter,
  setSequence: defaultSetter,
});

export const Provider = ({ children }: PropsWithChildren) => {
  const { draft } = useAppDataStore();
  const [title, setTitle] = useState<string>(draft?.title || '');
  const [sequence, setSequence] = useState<PostContentSequenceFormat>(
    draft?.content || ['']
  );

  return (
    <EditorBaseContext.Provider
      value={{
        title,
        sequence,
        setTitle,
        setSequence,
      }}
    >
      {children}
    </EditorBaseContext.Provider>
  );
};
