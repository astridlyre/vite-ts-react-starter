/* eslint-disable no-undef */
import useSWR from 'swr'

const API_ENDPOINT = (id: number) => 'https://www.example.com' + `${id}`
const fetcher = (input: RequestInfo, init: RequestInit | undefined) =>
  fetch(input, init).then((res) => res.json())

export function useUser(id: number) {
  const { data, error } = useSWR(API_ENDPOINT(id), fetcher)

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  }
}
