/* eslint-disable no-undef */
import useSWR from 'swr'

const api = (id: number) => 'https://www.example.com' + `${id}`

const fetcher = (input: RequestInfo, init: RequestInit | undefined) =>
  window.fetch(input, init).then((res) => res.json())

export function useUser(id: number) {
  const { data, error } = useSWR(api(id), fetcher)

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  }
}
