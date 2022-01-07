import { EventBus } from '.'
import { describe, expect, it, vi } from 'vitest'

const testEvent = new CustomEvent('test-event', {
  detail: { message: 'This is a test' },
})

describe('EventBus', () => {
  it('subscribes a listener', () => {
    const mockListener = vi.fn()

    EventBus.on('test-event', mockListener)
    EventBus.emit(testEvent)

    expect(mockListener).toHaveBeenCalledWith(testEvent.detail)
  })

  it('unsubscribes a listener', () => {
    const mockListener = vi.fn()

    EventBus.on('test-event', mockListener)
    EventBus.emit(testEvent)

    expect(mockListener).toHaveBeenCalledWith(testEvent.detail)
    expect(mockListener).toBeCalledTimes(1)

    EventBus.off('test-event', mockListener)
    EventBus.emit(testEvent)

    expect(mockListener).toBeCalledTimes(1)
  })

  it('removes all listeners', () => {
    const mockListenerA = vi.fn()
    const mockListenerB = vi.fn()

    EventBus.on('test-event', mockListenerA)
    EventBus.on('test-event', mockListenerB)
    EventBus.emit(testEvent)

    expect(mockListenerA).toHaveBeenCalledWith(testEvent.detail)
    expect(mockListenerB).toHaveBeenCalledWith(testEvent.detail)
    expect(mockListenerA).toBeCalledTimes(1)
    expect(mockListenerB).toBeCalledTimes(1)

    EventBus.removeAllListeners('test-event')
    EventBus.emit(testEvent)

    expect(mockListenerA).toBeCalledTimes(1)
    expect(mockListenerB).toBeCalledTimes(1)
  })
})
