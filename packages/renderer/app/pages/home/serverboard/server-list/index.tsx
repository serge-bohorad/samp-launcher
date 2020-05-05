import React, { FunctionComponent, CSSProperties, useCallback } from 'react'

import { Props } from './types'
import { Server } from '@shared/types/entities/server'

import { VirtualList } from '@app/components/common'
import { ItemServer } from './item-server'

export const ServerList: FunctionComponent<Props> = (props) => {
  const { className } = props

  const onClickSelectServer = useCallback(() => {
    //
  }, [])

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
    return (
      <ItemServer
        key={server.id}
        selected={false}
        style={style}
        server={server}
        onClick={onClickSelectServer}
      />
    )
  }, [])

  return (
    <VirtualList
      className={className}
      list={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
      elementHeight={38}
      renderElement={renderServer}
      onClick={onClickRefreshSelectedServer}
      onDoubleClick={onClickConnectToSelectedServer}
      onContextMenu={onClickShowContextMenu}
    />
  )
}
