import React, { FunctionComponent, useCallback } from 'react'
import { observer } from 'mobx-react'
import cn from 'classnames'

import { Props } from './types'

import { onCopyServerInfo, onCloneServer } from '@app/services/server'

import { useSelector } from '@app/hooks/common'

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
import ExtraInjectIcon from '@app/assets/icons/add-document.svg'
import SettingsIcon from '@app/assets/icons/settings.svg'

// TODO: disable buttons when servers is empty
const ControlBoxComponent: FunctionComponent<Props> = (props) => {
  const { className } = props

  const {
    selectedServer,
    setAddServerDialogShown,
    setDeleteServerConfirmDialogShown,
    setEditServerAddressDialogShown
  } = useSelector(({ server }) => server)

  const onClickConnect = useCallback(() => {
    //
  }, [])

  const onClickAddServer = useCallback(() => {
    setAddServerDialogShown(true)
  }, [])

  // TODO: check showConfirm
  const onClickDeleteServer = useCallback(() => {
    setDeleteServerConfirmDialogShown(true)
  }, [])

  const onClickRefreshServer = useCallback(() => {
    //
  }, [])

  const onClickRefreshAllServers = useCallback(() => {
    //
  }, [])

  const onClickCopyServerInfo = useCallback(() => {
    onCopyServerInfo()
    // TODO: add notif
  }, [])

  const onClickCloneServer = useCallback(() => {
    onCloneServer()
  }, [])

  const onClickEditServerAddress = useCallback(() => {
    setEditServerAddressDialogShown(true)
  }, [])

  const onClickManageExtraInject = useCallback(() => {
    //
  }, [])

  const onClickShowSettings = useCallback(() => {
    //
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
        className={cn(styles.button, styles.buttonEditAddress)}
        title="Edit selected server address"
        disabled={!selectedServer}
        icon={EditServerAddressIcon}
        onClick={onClickEditServerAddress}
      />
      <IconButton
        className={styles.button}
        title="Manage shared extra inject"
        icon={ExtraInjectIcon}
        onClick={onClickManageExtraInject}
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
