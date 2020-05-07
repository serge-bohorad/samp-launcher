import React, { FunctionComponent, CSSProperties, useCallback, useEffect } from 'react'
import { observer } from 'mobx-react'

import { Props } from './types'
import { Server } from '@shared/types/entities'

import { useSelector } from '@app/hooks/common'

import { VirtualList } from '@app/components/common'
import { ItemServer } from './item-server'

const ServerListComponent: FunctionComponent<Props> = (props) => {
  const { className } = props

  const {
    group: { selectedGroup, setGroupServers },
    server: { servers, clearServers, setServers, setSelectedServer }
  } = useSelector((store) => store)

  const onClickRefreshSelectedServer = useCallback(() => {
    //
  }, [])

  const onClickConnectToSelectedServer = useCallback(() => {
    //
  }, [])

  const onClickShowContextMenu = useCallback(() => {
    //
  }, [])

  const renderServer = useCallback((server: Server, style: CSSProperties) => {
    return <ItemServer key={server.id} style={style} server={server} />
  }, [])

  // Replace servers when the selected group has been switched
  useEffect(() => {
    if (!selectedGroup) {
      if (servers.length) {
        clearServers()
        setSelectedServer()
      }

      return
    }

    setServers(selectedGroup.servers)
    setSelectedServer(selectedGroup.servers[0])

    // TODO refresh all
  }, [selectedGroup?.id])

  // Synchronize servers with the selected group after adding or deleting a server
  useEffect(() => {
    if (!selectedGroup || servers.length === selectedGroup.servers.length) {
      return
    }

    setGroupServers(servers, selectedGroup)
  }, [servers.length])

  return (
    <VirtualList
      className={className}
      list={servers}
      elementHeight={38}
      renderElement={renderServer}
      onClick={onClickRefreshSelectedServer}
      onDoubleClick={onClickConnectToSelectedServer}
      onContextMenu={onClickShowContextMenu}
    />
  )
}

export const ServerList = observer(ServerListComponent)
