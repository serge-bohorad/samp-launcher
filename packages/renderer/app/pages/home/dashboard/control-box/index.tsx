import React, { FunctionComponent, useCallback } from 'react'
import cn from 'classnames'

import { Props } from './types'

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

export const ControlBox: FunctionComponent<Props> = (props) => {
  const { className } = props

  const onClickConnect = useCallback(() => {
    //
  }, [])

  const onClickAddServer = useCallback(() => {
    //
  }, [])

  const onClickDeleteServer = useCallback(() => {
    //
  }, [])

  const onClickRefreshServer = useCallback(() => {
    //
  }, [])

  const onClickRefreshAllServers = useCallback(() => {
    //
  }, [])

  const onClickCopyServerInfo = useCallback(() => {
    //
  }, [])

  const onClickCloneServer = useCallback(() => {
    //
  }, [])

  const onClickEditServerAddress = useCallback(() => {
    //
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
        icon={ConnectIcon}
        onClick={onClickConnect}
      />
      <IconButton className={styles.button} icon={AddServerIcon} onClick={onClickAddServer} />
      <IconButton
        className={cn(styles.button, styles.buttonDelete)}
        icon={DeleteServerIcon}
        onClick={onClickDeleteServer}
      />
      <IconButton
        className={styles.button}
        icon={RefreshServerIcon}
        onClick={onClickRefreshServer}
      />
      <IconButton
        className={styles.button}
        icon={RefreshAllServersIcon}
        onClick={onClickRefreshAllServers}
      />
      <IconButton
        className={styles.button}
        icon={CopyServerInfoIcon}
        onClick={onClickCopyServerInfo}
      />
      <IconButton className={styles.button} icon={CloneServerIcon} onClick={onClickCloneServer} />
      <IconButton
        className={cn(styles.button, styles.buttonEditAddress)}
        icon={EditServerAddressIcon}
        onClick={onClickEditServerAddress}
      />
      <IconButton
        className={styles.button}
        icon={ExtraInjectIcon}
        onClick={onClickManageExtraInject}
      />
      <IconButton className={styles.button} icon={SettingsIcon} onClick={onClickShowSettings} />
    </div>
  )
}
