import { useCallback } from 'react'

import { useSelector } from '@app/hooks/common'

export function useOnClickAddServerCallback(): () => void {
  const {
    server: { setAddServerDialogShown },
    group: { selectedGroup, setCreateGroupDialogShown },
    misc: { addNotification }
  } = useSelector((store) => store)

  return useCallback(() => {
    if (!selectedGroup) {
      setCreateGroupDialogShown(true)

      addNotification(
        {
          type: 'warning',
          content:
            'Before adding a new server, you have to create a group that can contain any servers'
        },
        15000
      )
      return
    }

    setAddServerDialogShown(true)
  }, [selectedGroup])
}
