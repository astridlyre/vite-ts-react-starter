import { renderHook } from '@testing-library/react-hooks'
import { wait } from '@testing-library/user-event/dist/utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useCat } from './useCat'

const oldFetch = window.fetch

const mockFetchSuccess = () =>
  Promise.resolve({
    ok: true,
    json() {
      return Promise.resolve({ message: 'Hello, World!' })
    },
  })

describe('useCat', () => {
  afterEach(() => {
    window.fetch = oldFetch
  })

  it('should fetch data', async () => {
    window.fetch = vi.fn().mockImplementation(mockFetchSuccess)
    const { result } = renderHook(() => useCat())

    await wait(1)
    expect(result.current.data).toEqual({ message: 'Hello, World!' })
  })
})
