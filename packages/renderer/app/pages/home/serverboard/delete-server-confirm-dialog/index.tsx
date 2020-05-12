import React, { FunctionComponent, useCallback } from 'react'

import { onSaveDeletionConfirm } from '@app/services/settings'
import { onDeleteServer } from '@app/services/server'

import { useSelector } from '@app/hooks/common'

import { QuestionDialog } from '@app/components/common'

import styles from './styles.scss'

export const DeleteServerConfirmDialog: FunctionComponent = () => {
  const { selectedServer, setDeleteServerConfirmDialogShown } = useSelector(({ server }) => server)

  const { name, hostname, host, port } = selectedServer || {}

  const onClickClose = useCallback(() => {
    setDeleteServerConfirmDialogShown(false)
  }, [])

  const onClickYes = useCallback((askNext: boolean) => {
    if (!askNext) {
      onSaveDeletionConfirm(false)
    }

    onDeleteServer(selectedServer)

    onClickClose()
  }, [])

  const serverName = name || hostname || `${host}:${port}`

  return (
    <QuestionDialog
      caption="Server deletion confirmation"
      onClickClose={onClickClose}
      onClickFirstButton={onClickYes}
      onClickSecondButton={onClickClose}
    >
      Are you sure you want to delete server <span className={styles.serverName}>{serverName}</span>
      ?
    </QuestionDialog>
  )
}
