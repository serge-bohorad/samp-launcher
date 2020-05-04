/* eslint-disable react-hooks/exhaustive-deps */
import { DependencyList, FormEvent, useCallback } from 'react'

import { Callback } from './types'

export function useInputCallback(
  callback: Callback,
  deps: DependencyList = []
): (event: FormEvent<HTMLInputElement>) => void {
  return useCallback((event: FormEvent<HTMLInputElement>) => {
    callback(event.currentTarget, event)
  }, deps)
}
