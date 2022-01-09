/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import {
  type EventListenerOptions,
  type EventListenerFunction,
  EventBus,
} from '../events'

export function useEvent(
  event: string,
  handler: EventListenerFunction,
  options?: EventListenerOptions,
) {
  const emitter = options?.emitter ?? EventBus

  useEffect(() => {
    if (handler) {
      emitter.on(event, handler, options)
      return () => emitter.off(event, handler)
    }
    return undefined
  }, [event, handler, options, emitter])
}
