import React, { FunctionComponent, useCallback } from 'react'

import { onDeleteServer } from '@app/services/server'

import { useSelector } from '@app/hooks/common'

import { DialogConfirm } from '@app/components/common'

import styles from './styles.scss'

export const DeleteServerConfirmDialog: FunctionComponent = () => {
  const { selectedServer, setDeleteServerConfirmDialogShown } = useSelector(({ server }) => server)

  const { name, hostname, host, port } = selectedServer || {}

  const onClickClose = useCallback(() => {
    setDeleteServerConfirmDialogShown(false)
  }, [])

  // TODO: check showConfirm
  const onClickYes = useCallback((showConfirmNext: boolean) => {
    onDeleteServer(selectedServer)

    onClickClose()
  }, [])

  const serverName = name || hostname || `${host}:${port}`

  return (
    <DialogConfirm
      caption="Server deletion confirmation"
      checkboxHint="Don't ask me anymore"
      onClickClose={onClickClose}
      onClickFirstButton={onClickYes}
      onClickSecondButton={onClickClose}
    >
      Are you sure you want to delete server <span className={styles.serverName}>{serverName}</span>
      ?
    </DialogConfirm>
  )
}
