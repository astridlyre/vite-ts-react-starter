/* eslint-disable no-unused-vars, no-undef, @typescript-eslint/no-unused-vars */
import { afterEach, describe, expect, it, vi } from 'vitest'
import { fetcher, type FetcherError } from './fetcher'

const mockFetcherSuccess = (_input: RequestInfo, _init: RequestInit) =>
  Promise.resolve({
    ok: true,
    status: 200,
    json() {
      return Promise.resolve({ testData: 'hello' })
    },
  })

const mockFetcherFailure = (_input: RequestInfo, _init: RequestInit) =>
  Promise.resolve({
    ok: false,
    status: 500,
    json() {
      return Promise.resolve({ error: 'Something went wrong!' })
    },
  })

const oldFetcher = window.fetch

describe('fetcher', () => {
  afterEach(() => {
    window.fetch = oldFetcher
  })

  it('fetches', async () => {
    window.fetch = vi.fn().mockImplementation(mockFetcherSuccess)
    const response = await fetcher('/test/api', { method: 'GET' })
    expect(window.fetch).toHaveBeenCalledOnce()
    expect(response).toEqual({ testData: 'hello' })
  })

  it('handles failure', async () => {
    window.fetch = vi.fn().mockImplementation(mockFetcherFailure)

    try {
      await fetcher('/test/api', { method: 'GET' })
      // Should not reach here
      expect(true).toEqual(false)
    } catch (error) {
      expect((error as FetcherError).info).toEqual({
        error: 'Something went wrong!',
      })
    }
  })
})
