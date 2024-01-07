import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface User {
  firstName: string,
  lastName: string,
  setFirstName: (name: string) => void,
  setLastName: (name: string) => void
}

const useUserStore = create<User>()(
  persist(
    (set, get) => ({
      firstName: '',
      lastName: '',
      setFirstName: (firstName: string) => set(({ firstName })),
      setLastName: (lastName: string) => set(({ lastName }))
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
)

export default useUserStore;