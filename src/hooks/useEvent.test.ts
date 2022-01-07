/* eslint-disable no-unused-vars, @typescript-eslint/no-unused-vars */
import { renderHook } from '@testing-library/react-hooks'
import { EventListenerFunction } from '../events'
import { describe, expect, it, vi } from 'vitest'
import { useEvent } from './useEvent'

describe('useEvent', () => {
  it('should subscribe to an event', async () => {
    // Set up mocks
    const listeners: EventListenerFunction[] = []

    const mockEmitter = {
      on: vi
        .fn()
        .mockImplementation((_event: string, listener: EventListenerFunction) =>
          listeners.push(listener),
        ),
      off: vi.fn().mockImplementation(() => (listeners.length = 0)),
      emit: (event: CustomEvent) =>
        listeners.forEach((listener) => listener(event.detail)),
    }

    const mockEventHandler = vi
      .fn()
      .mockImplementation((_event: Pick<CustomEvent, 'detail'>) => void 0)

    // Render the hook
    const { unmount } = renderHook(() =>
      useEvent('test-event', mockEventHandler, { emitter: mockEmitter }),
    )

    expect(mockEmitter.on).toHaveBeenCalledOnce()
    expect(mockEmitter.off).not.toHaveBeenCalled()

    // Call it with a custom event
    const event = new CustomEvent('test-event', {
      detail: { message: 'This is a test' },
    })

    mockEmitter.emit(event)
    expect(mockEventHandler).toHaveBeenCalledWith(event.detail)

    // Test unmounting
    unmount()
    expect(mockEmitter.off).toHaveBeenCalledWith('test-event', mockEventHandler)
  })
})
