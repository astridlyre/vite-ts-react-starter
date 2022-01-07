/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import {
  type EventListenerOptions,
  type EventListenerFunction,
  EventBus,
} from '../events/'

export function useEvent(
  event: string,
  handler: EventListenerFunction,
  options?: EventListenerOptions,
) {
  useEffect(() => {
    if (handler) {
      EventBus.on(event, handler, options)
      return () => EventBus.removeListener(event, handler)
    }
    return undefined
  }, [event, handler, options])
}
