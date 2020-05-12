import React, { FunctionComponent, CSSProperties, useCallback, useEffect } from 'react'
import { observer } from 'mobx-react'

import { Props } from './types'
import { Server } from '@shared/types/entities'

import { onRefreshServer, onRefreshSeveralServers } from '@app/services/server'

import { useSelector } from '@app/hooks/common'

import { VirtualList } from '@app/components/common'
import { ItemServer } from './item-server'

const ServerListComponent: FunctionComponent<Props> = (props) => {
  const { className } = props

  const {
    group: { selectedGroup, setGroupServers },
    server: {
      selectedServer,
      servers,
      filteredServers,
      clearServers,
      setServers,
      setServerMenuShown,
      setConnectDialogShown
    },
    settings: { serverRefreshDelay, getRefreshAllServers }
  } = useSelector((store) => store)

  const onClickRefreshSelectedServer = useCallback(() => {
    onRefreshServer()
  }, [])

  const onClickConnectToSelectedServer = useCallback(() => {
    if (selectedServer) {
      setConnectDialogShown(true)
    }
  }, [selectedServer])

  const onClickShowContextMenu = useCallback(() => {
    setServerMenuShown(true)
  }, [])

  const renderServer = useCallback((server: Server, style: CSSProperties) => {
    return <ItemServer key={server.id} style={style} server={server} />
  }, [])

  // Replace servers when the selected group has been switched
  useEffect(() => {
    if (!selectedGroup) {
      if (servers.length) {
        clearServers()
      }

      return
    }

    setServers(selectedGroup.servers)

    onRefreshSeveralServers()
  }, [selectedGroup?.id])

  // Synchronize servers with the selected group after adding or deleting a server
  useEffect(() => {
    if (selectedGroup) {
      setGroupServers(servers, selectedGroup)
    }
  }, [servers.length])

  // Creates a server refresh interval
  useEffect(() => {
    const interval = setInterval(() => {
      if (getRefreshAllServers()) {
        return onRefreshSeveralServers()
      }

      onRefreshServer()
    }, serverRefreshDelay)

    return (): void => clearInterval(interval)
  }, [serverRefreshDelay])

  return (
    <VirtualList
      className={className}
      list={filteredServers}
      elementHeight={38}
      renderElement={renderServer}
      onClick={onClickRefreshSelectedServer}
      onDoubleClick={onClickConnectToSelectedServer}
      onContextMenu={onClickShowContextMenu}
    />
  )
}

export const ServerList = observer(ServerListComponent)
