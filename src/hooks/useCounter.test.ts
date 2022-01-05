import { act, renderHook } from '@testing-library/react-hooks'
import { useCounter } from './useCounter'
import { describe, it, expect } from 'vitest'

describe('useCounter', () => {
  it('should increment counter', () => {
    const { result } = renderHook(() => useCounter())
    act(() => {
      result.current.increment()
    })
    expect(result.current.count).toBe(1)
  })
})
