import { useState, useCallback } from 'react'

export function useForceUpdate(): () => void {
  const [, setValue] = useState(0)

  return useCallback(() => {
    setValue((v) => v + 1)
  }, [])
}
