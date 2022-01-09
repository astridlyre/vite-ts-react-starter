/* eslint-disable no-undef */
import { apiEndpoint } from '../config'
import { fetcher } from '../fetcher'
import useSWR from 'swr'

export function useCat() {
  const { data, error } = useSWR(apiEndpoint, fetcher)

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}
