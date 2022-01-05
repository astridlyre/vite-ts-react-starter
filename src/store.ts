/* eslint-disable @typescript-eslint/no-unused-vars, no-unused-vars */
import create, { SetState } from 'zustand'
import { persist } from 'zustand/middleware'

export type CounterState = {
  count: number
  increment: SetState<CounterState>
  decrement: SetState<CounterState>
}

export type StateSelector = (state: CounterState) => unknown
export const countSelector = (state: CounterState) => state.count
export const incrementSelector = (state: CounterState) => state.increment
export const decrementSelector = (state: CounterState) => state.decrement

export const useStore = create<CounterState>(
  persist(
    (set, _get) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
    }),
    {
      name: 'counter-storage',
    },
  ),
)
