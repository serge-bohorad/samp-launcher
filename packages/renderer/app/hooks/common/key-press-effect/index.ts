/* eslint-disable react-hooks/exhaustive-deps */
import { DependencyList, useCallback, useState, useEffect } from 'react'

import { Callback } from './types'

export function useKeyPressEffect<K extends keyof KeyNames>(
  keys: K[],
  callback: Callback,
  deps: DependencyList
): void {
  const handler = useCallback(callback, deps)

  const [pressed, setPressed] = useState(false)

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (pressed) {
        return
      }

      if (keys.includes(event.key as K)) {
        setPressed(true)
      }
    },
    [pressed]
  )

  const onKeyUp = useCallback(
    (event) => {
      if (pressed && keys.includes(event.key)) {
        setPressed(false)

        handler(event.key as K, event)
      }
    },
    [pressed, handler]
  )

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown)

    return (): void => window.removeEventListener('keydown', onKeyDown)
  }, [onKeyDown])

  useEffect(() => {
    window.addEventListener('keyup', onKeyUp)

    return (): void => window.removeEventListener('keyup', onKeyUp)
  }, [onKeyUp])
}
