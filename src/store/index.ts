/* eslint-disable @typescript-eslint/no-unused-vars, no-unused-vars */
import create from 'zustand'
import { persist } from 'zustand/middleware'

export type CatStateType = {
  fact: string
  setFact: (fact: string) => void
}

export type CatSelector = (state: CatStateType) => unknown
export const factSelector = (state: CatStateType) => state.fact
export const setFactSelector = (state: CatStateType) => state.setFact

// Creates a zustand store and persists the data to localStorage
export const useStore = create<CatStateType>(
  persist(
    (set, _get) => ({
      fact: '',
      setFact: (fact) => set(() => ({ fact })),
    }),
    {
      name: 'cat-fact-storage',
    },
  ),
)
