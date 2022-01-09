/* eslint-disable no-undef */
import { mutate } from 'swr'

export class FetcherError {
  info: Record<string, unknown>
  status: number

  constructor(message: string, info: Record<string, unknown>, status: number) {
    Error.call(message)
    this.info = info
    this.status = status
  }
}

export const fetcher = async (
  input: RequestInfo,
  init?: RequestInit | undefined,
) => {
  const res = await window.fetch(input, init)

  if (!res.ok) {
    const json = await res.json()
    const error = new FetcherError(
      'An error occurred while fetching data',
      json,
      res.status,
    )
    throw error
  }

  return res.json()
}

export function prefetch(url: RequestInfo) {
  mutate(url, fetcher(url))
}
