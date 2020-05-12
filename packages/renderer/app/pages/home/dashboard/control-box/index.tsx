import React, { FunctionComponent, useCallback } from 'react'
import { observer } from 'mobx-react'
import cn from 'classnames'

import { Props } from './types'

import {
  onDeleteServer,
  onCloneServer,
  onRefreshServer,
  onRefreshSeveralServers
} from '@app/services/server'

import { useSelector } from '@app/hooks/common'
import { useOnClickConnectCallback } from '@app/hooks/particular/home/dashboard/on-click-connect-callback'
import { useOnClickAddServerCallback } from '@app/hooks/particular/home/dashboard/on-click-add-server-callback'
import { useOnClickCopyServerInfoCallback } from '@app/hooks/particular/home/dashboard/on-click-copy-server-info-callback'

import { IconButton } from '@app/components/common'

import styles from './styles.scss'

import ConnectIcon from '@app/assets/icons/play.svg'
import AddServerIcon from '@app/assets/icons/plus.svg'
import DeleteServerIcon from '@app/assets/icons/cross-bold.svg'
import RefreshServerIcon from '@app/assets/icons/refresh.svg'
import RefreshAllServersIcon from '@app/assets/icons/refresh2.svg'
import CopyServerInfoIcon from '@app/assets/icons/copy.svg'
import CloneServerIcon from '@app/assets/icons/copy2.svg'
import EditServerAddressIcon from '@app/assets/icons/geolocation.svg'
import SettingsIcon from '@app/assets/icons/settings.svg'

const ControlBoxComponent: FunctionComponent<Props> = (props) => {
  const { className } = props

  const {
    server: { selectedServer, setDeleteServerConfirmDialogShown, setEditServerAddressDialogShown },
    settings: { deletionConfirm, setSettingsDialogShown }
  } = useSelector((store) => store)

  const onClickConnect = useOnClickConnectCallback()

  const onClickAddServer = useOnClickAddServerCallback()

  const onClickDeleteServer = useCallback(() => {
    if (deletionConfirm) {
      return setDeleteServerConfirmDialogShown(true)
    }

    onDeleteServer()
  }, [deletionConfirm])

  const onClickRefreshServer = useCallback(() => {
    onRefreshServer()
  }, [])

  const onClickRefreshAllServers = useCallback(() => {
    onRefreshSeveralServers()
  }, [])

  const onClickCopyServerInfo = useOnClickCopyServerInfoCallback()

  const onClickCloneServer = useCallback(() => {
    onCloneServer()
  }, [])

  const onClickEditServerAddress = useCallback(() => {
    setEditServerAddressDialogShown(true)
  }, [])

  const onClickShowSettings = useCallback(() => {
    setSettingsDialogShown(true)
  }, [])

  return (
    <div className={cn(styles.container, className)}>
      <IconButton
        className={cn(styles.button, styles.buttonConnect)}
        title="Connect to selected server"
        disabled={!selectedServer}
        icon={ConnectIcon}
        onClick={onClickConnect}
      />
      <IconButton
        className={styles.button}
        title="Add new server"
        icon={AddServerIcon}
        onClick={onClickAddServer}
      />
      <IconButton
        className={cn(styles.button, styles.buttonDelete)}
        title="Delete selected server"
        disabled={!selectedServer}
        icon={DeleteServerIcon}
        onClick={onClickDeleteServer}
      />
      <IconButton
        className={styles.button}
        title="Refresh selected server"
        disabled={!selectedServer}
        icon={RefreshServerIcon}
        onClick={onClickRefreshServer}
      />
      <IconButton
        className={styles.button}
        title="Refresh all servers"
        disabled={!selectedServer}
        icon={RefreshAllServersIcon}
        onClick={onClickRefreshAllServers}
      />
      <IconButton
        className={styles.button}
        title="Copy selected server info"
        disabled={!selectedServer}
        icon={CopyServerInfoIcon}
        onClick={onClickCopyServerInfo}
      />
      <IconButton
        className={styles.button}
        title="Clone selected server"
        disabled={!selectedServer}
        icon={CloneServerIcon}
        onClick={onClickCloneServer}
      />
      <IconButton
        className={styles.button}
        title="Edit selected server address"
        disabled={!selectedServer}
        icon={EditServerAddressIcon}
        onClick={onClickEditServerAddress}
      />
      <IconButton
        className={styles.button}
        title="Settings"
        icon={SettingsIcon}
        onClick={onClickShowSettings}
      />
    </div>
  )
}

export const ControlBox = observer(ControlBoxComponent)
