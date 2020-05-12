import { useCallback } from 'react'

import { onCopyServerInfo } from '@app/services/server'

import { useSelector } from '@app/hooks/common'

export function useOnClickCopyServerInfoCallback(): () => void {
  const { addNotification } = useSelector(({ misc }) => misc)

  return useCallback(() => {
    onCopyServerInfo()

    addNotification({ type: 'info', content: 'The server info has been copied' })
  }, [])
}
