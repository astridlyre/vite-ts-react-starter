import actualCreate, { StateCreator } from 'zustand'
import { afterEach } from 'vitest'

const storeResetFns: Set<() => void> = new Set()

const create = <T extends object>(createState: StateCreator<T>) => {
  const store = actualCreate(createState)
  const initialState = store.getState()
  storeResetFns.add(() => store.setState(initialState, true))
  return store
}

afterEach(() => {
  storeResetFns.forEach((resetFn) => resetFn())
})

export default create
