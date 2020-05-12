import React, { FunctionComponent, useState, useCallback } from 'react'
import { observer } from 'mobx-react'

import { onSaveServerPassword, onConnectToServer } from '@app/services/server'

import { useSelector, useInputCallback } from '@app/hooks/common'

import { Dialog, IconInput } from '@app/components/common'
import { ServerInfo } from './server-info'

import styles from './styles.scss'

import IconPassword from '@app/assets/icons/padlock-locked.svg'

const ConnectDialogComponent: FunctionComponent = () => {
  const {
    server: { selectedServer, setConnectDialogShown },
    settings: { gameDirectory, editGameDirectoryDialogShown, setEditGameDirectoryDialogShown },
    misc: { addNotification }
  } = useSelector((store) => store)

  const { name, hostname, locked, password } = selectedServer || {}
  const serverName = name || hostname || 'Retrieving info...'
  const closable = !editGameDirectoryDialogShown

  const [tempPassword, setTempPassword] = useState(password!)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onClickClose = useCallback(() => {
    setConnectDialogShown(false)
  }, [])

  const onChangePassword = useInputCallback(
    ({ value }) => {
      setTempPassword(value)
    },
    [selectedServer]
  )

  const onClickConnect = useCallback(async () => {
    if (!gameDirectory) {
      setEditGameDirectoryDialogShown(true)

      addNotification({ type: 'warning', content: 'Provide the path to the game directory' })
      return
    }

    if (locked) {
      onSaveServerPassword(tempPassword)
    }

    setLoading(true)

    const connectionError = await onConnectToServer()

    setLoading(false)

    if (connectionError) {
      return setError(connectionError)
    }

    onClickClose()
  }, [locked, tempPassword])

  return (
    <Dialog
      loading={loading}
      closable={closable}
      concave={true}
      caption="Connection"
      firstButtonText="Connect"
      onClickClose={onClickClose}
      onClickFirstButton={onClickConnect}
      onClickSecondButton={onClickClose}
    >
      <div className={styles.serverName}>{serverName}</div>
      <ServerInfo className={styles.serverInfo} />
      {locked && (
        <IconInput
          className={styles.inputPassword}
          icon={IconPassword}
          type="password"
          placeholder="Server password"
          value={tempPassword}
          onChange={onChangePassword}
        />
      )}
      <div className={styles.error}>{error}</div>
    </Dialog>
  )
}

export const ConnectDialog = observer(ConnectDialogComponent)
