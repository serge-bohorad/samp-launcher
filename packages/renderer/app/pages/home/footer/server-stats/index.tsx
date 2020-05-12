import React, { FunctionComponent } from 'react'
import { observer } from 'mobx-react'
import cn from 'classnames'

import { Props } from './types'

import { useSelector } from '@app/hooks/common'

import styles from './styles.scss'

const ServerStatsComponent: FunctionComponent<Props> = (props) => {
  const { className } = props

  const { filteredServers } = useSelector(({ server }) => server)

  const playerCount = filteredServers.reduce<number>(
    (prev, { players }) => prev + (players || 0),
    0
  )

  return (
    <pre className={cn(styles.container, className)}>
      {`Servers: ${filteredServers.length}   Players: ${playerCount}`}
    </pre>
  )
}

export const ServerStats = observer(ServerStatsComponent)
