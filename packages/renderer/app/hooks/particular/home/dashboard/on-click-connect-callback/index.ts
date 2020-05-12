import { useCallback } from 'react'

import { onConnectToServer } from '@app/services/server'

import { useSelector } from '@app/hooks/common'

export function useOnClickConnectCallback(): () => any {
  const {
    server: { selectedServer, setConnectDialogShown },
    settings: { gameDirectory, setEditGameDirectoryDialogShown },
    misc: { addNotification }
  } = useSelector((store) => store)

  return useCallback(async () => {
    const { locked, password } = selectedServer!

    if (!gameDirectory) {
      setEditGameDirectoryDialogShown(true)

      addNotification({ type: 'warning', content: 'Provide the path to the game directory' })
      return
    }

    if (locked && !password) {
      setConnectDialogShown(true)

      addNotification({ type: 'warning', content: 'Provide the server password' })
      return
    }

    const connectionError = await onConnectToServer()

    if (connectionError) {
      addNotification({ type: 'error', content: connectionError }, 25000)
    }
  }, [selectedServer, gameDirectory])
}
