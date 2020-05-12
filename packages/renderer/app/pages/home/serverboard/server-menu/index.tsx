import React, { FunctionComponent, useCallback } from 'react'
import cn from 'classnames'

import {
  onDeleteServer,
  onRefreshServer,
  onRefreshSeveralServers,
  onCloneServer
} from '@app/services/server'

import { useSelector } from '@app/hooks/common'
import { useOnClickConnectCallback } from '@app/hooks/particular/home/dashboard/on-click-connect-callback'
import { useOnClickCopyServerInfoCallback } from '@app/hooks/particular/home/dashboard/on-click-copy-server-info-callback'
import { useOnClickAddServerCallback } from '@app/hooks/particular/home/dashboard/on-click-add-server-callback'

import { ContextMenu, ContextMenuIconItem } from '@app/components/common'

import styles from './styles.scss'

import IconConnect from '@app/assets/icons/play.svg'
import IconDelete from '@app/assets/icons/cross-bold.svg'
import IconRefresh from '@app/assets/icons/refresh.svg'
import IconRefreshAll from '@app/assets/icons/refresh2.svg'
import IconCopyInfo from '@app/assets/icons/copy.svg'
import IconClone from '@app/assets/icons/copy2.svg'
import IconEditAddress from '@app/assets/icons/geolocation.svg'
import IconManageExtraInject from '@app/assets/icons/add-document.svg'
import IconRename from '@app/assets/icons/edit.svg'
import IconDescription from '@app/assets/icons/comment.svg'
import IconAdd from '@app/assets/icons/plus.svg'

export const ServerMenu: FunctionComponent = () => {
  const {
    server: {
      selectedServer,
      setServerMenuShown,
      setDeleteServerConfirmDialogShown,
      setEditServerAddressDialogShown,
      setEditServerNameDialogShown,
      setEditServerDescriptionDialogShown,
      setManageServerExtraInjectDialogShown
    },
    settings: { deletionConfirm }
  } = useSelector((store) => store)

  const onClose = useCallback(() => {
    setServerMenuShown(false)
  }, [])

  const onClickConnect = useOnClickConnectCallback()

  const onClickDelete = useCallback(() => {
    if (deletionConfirm) {
      return setDeleteServerConfirmDialogShown(true)
    }

    onDeleteServer()
  }, [])

  const onClickRefresh = useCallback(() => {
    onRefreshServer()
  }, [])

  const onClickRefreshAll = useCallback(() => {
    onRefreshSeveralServers()
  }, [])

  const onClickCopyInfo = useOnClickCopyServerInfoCallback()

  const onClickClone = useCallback(() => {
    onCloneServer()
  }, [])

  const onClickEditAddress = useCallback(() => {
    setEditServerAddressDialogShown(true)
  }, [])

  const onClickRename = useCallback(() => {
    setEditServerNameDialogShown(true)
  }, [])

  const onClickEditDescription = useCallback(() => {
    setEditServerDescriptionDialogShown(true)
  }, [])

  const onClickManageExtraInject = useCallback(() => {
    setManageServerExtraInjectDialogShown(true)
  }, [])

  const onClickAdd = useOnClickAddServerCallback()

  return (
    <ContextMenu className={styles.container} onClose={onClose}>
      {selectedServer ? (
        <>
          <ContextMenuIconItem
            className={cn(styles.item, styles.itemConnect)}
            icon={IconConnect}
            onClick={onClickConnect}
          >
            Connect
          </ContextMenuIconItem>
          <ContextMenuIconItem
            className={cn(styles.item, styles.itemDelete)}
            icon={IconDelete}
            onClick={onClickDelete}
          >
            Delete server
          </ContextMenuIconItem>
          <ContextMenuIconItem className={styles.item} icon={IconRefresh} onClick={onClickRefresh}>
            Refresh server
          </ContextMenuIconItem>
          <ContextMenuIconItem
            className={styles.item}
            icon={IconRefreshAll}
            onClick={onClickRefreshAll}
          >
            Refresh all servers
          </ContextMenuIconItem>
          <ContextMenuIconItem
            className={styles.item}
            icon={IconCopyInfo}
            onClick={onClickCopyInfo}
          >
            Copy server info
          </ContextMenuIconItem>
          <ContextMenuIconItem className={styles.item} icon={IconClone} onClick={onClickClone}>
            Clone server
          </ContextMenuIconItem>
          <ContextMenuIconItem
            className={styles.item}
            icon={IconEditAddress}
            onClick={onClickEditAddress}
          >
            Edit server address
          </ContextMenuIconItem>
          <ContextMenuIconItem className={styles.item} icon={IconRename} onClick={onClickRename}>
            Rename server
          </ContextMenuIconItem>
          <ContextMenuIconItem
            className={styles.item}
            icon={IconDescription}
            onClick={onClickEditDescription}
          >
            Edit server description
          </ContextMenuIconItem>
          <ContextMenuIconItem
            className={styles.item}
            icon={IconManageExtraInject}
            onClick={onClickManageExtraInject}
          >
            Server extra inject
          </ContextMenuIconItem>
        </>
      ) : (
        <ContextMenuIconItem className={styles.item} icon={IconAdd} onClick={onClickAdd}>
          Add server
        </ContextMenuIconItem>
      )}
    </ContextMenu>
  )
}
