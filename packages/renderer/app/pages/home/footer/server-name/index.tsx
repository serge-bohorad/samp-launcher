import React, { FunctionComponent } from 'react'
import { observer } from 'mobx-react'
import cn from 'classnames'

import { Props } from './types'

import { useSelector } from '@app/hooks/common'

import styles from './styles.scss'

const ServerNameComponent: FunctionComponent<Props> = (props) => {
  const { className } = props

  const { selectedServer } = useSelector(({ server }) => server)

  const { name, hostname } = selectedServer || {}

  return <div className={cn(styles.container, className)}>{name || hostname}</div>
}

export const ServerName = observer(ServerNameComponent)
