import AsyncStorage from '@react-native-async-storage/async-storage'
import { StateCreator, create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { PostEntity } from '../_entities/PostEntity'
import PostDraftEntity from '../_entities/PostDraftEntity'

interface UserSlice {
  firstName: string,
  lastName: string,
  setFirstName: (name: string) => void,
  setLastName: (name: string) => void
}

interface PostSlice {
  draft: PostDraftEntity | null
  setDraft: (draft: PostDraftEntity | null) => void;
}

export const createPostSlice: StateCreator<PostSlice & UserSlice, [], [], PostSlice> = (set) => ({
  draft: null,
  setDraft: (draft: PostDraftEntity | null) => set({ draft })
});

export const createUserSlice: StateCreator<PostSlice & UserSlice, [], [], any> = (set) => ({
  firstName: '',
  lastName: '',
  setFirstName: (firstName: string) => set(({ firstName })),
  setLastName: (lastName: string) => set(({ lastName }))
});

const useAppDataStore = create<UserSlice & PostSlice>()(
  persist(
    (...state) => ({
      ...createPostSlice(...state),
      ...createUserSlice(...state)
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)

export default useAppDataStore;