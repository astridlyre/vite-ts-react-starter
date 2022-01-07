/* eslint-disable @typescript-eslint/no-unused-vars, no-unused-vars */
import create from 'zustand'
import { persist } from 'zustand/middleware'

export type CatState = {
  fact: string
  setFact: (fact: string) => void
}

export type CatSelector = (state: CatState) => unknown
export const setFactSelector = (state: CatState) => state.setFact

export const useStore = create<CatState>(
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
