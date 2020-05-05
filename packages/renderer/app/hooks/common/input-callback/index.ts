/* eslint-disable react-hooks/exhaustive-deps */
import { DependencyList, FormEvent, useCallback } from 'react'

import { Callback, ReturnCallback } from './types'

export function useInputCallback(callback: Callback, deps: DependencyList = []): ReturnCallback {
  return useCallback((event: FormEvent<HTMLInputElement>) => {
    callback(event.currentTarget, event)
  }, deps)
}
