/* eslint-disable no-undef */
import useSWR from 'swr'
import { fetcher } from '../utils/fetcher'
import { apiEndpoint } from '../config'

export function useCat() {
  const { data, error } = useSWR(apiEndpoint, fetcher)

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}
