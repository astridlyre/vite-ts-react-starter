/* eslint-disable no-unused-vars */
export type EventListenerFunction = (event: CustomEvent) => void

export type EventListenerOptions = {
  once: boolean
}

type EventListenerType = {
  listener: EventListenerFunction
  options: EventListenerOptions
}

export interface IEventBus {
  on(
    event: string,
    listener: EventListenerFunction,
    options?: EventListenerOptions,
  ): void
  addListener(
    event: string,
    listener: EventListenerFunction,
    options?: EventListenerOptions,
  ): void
  off(event: string, listener: EventListenerFunction): void
  removeListener(event: string, listener: EventListenerFunction): void
  removeAllListeners(event: string): void
  emit(event: CustomEvent): void
}

const DEFAULT_OPTIONS: EventListenerOptions = { once: false }
const listeners: Map<string, EventListenerType[]> = new Map()

export const EventBus: IEventBus = {
  on(event, listener, options) {
    return this.addListener(event, listener, options)
  },
  off(event, listener) {
    return this.removeListener(event, listener)
  },
  removeListener(event, listener) {
    const currentListeners = listeners.get(event) ?? []
    listeners.set(
      event,
      currentListeners.filter((l) => l.listener !== listener),
    )
    return this
  },
  addListener(event, listener, options = DEFAULT_OPTIONS) {
    const currentListeners = listeners.get(event) ?? []
    currentListeners.push({ listener, options })
    listeners.set(event, currentListeners)
    return this
  },
  removeAllListeners(event) {
    listeners.delete(event)
    return this
  },
  emit(event) {
    const listenerGroup = listeners.get(event.type)

    if (listenerGroup) {
      const toRemove: EventListenerFunction[] = []

      listenerGroup.forEach(({ listener, options }) => {
        listener(event.detail)
        options.once && toRemove.push(listener)
      })

      toRemove.forEach((listener) => this.removeListener(event.type, listener))
    }

    return this
  },
}
