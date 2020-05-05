import React, { FunctionComponent } from 'react'
import cn from 'classnames'

import { Props } from './types'

import { SortingBox } from './sorting-box'
import { ServerList } from './server-list'

import styles from './styles.scss'

export const Serverboard: FunctionComponent<Props> = (props) => {
  const { className } = props

  return (
    <div className={cn(styles.container, className)}>
      <SortingBox />
      <ServerList className={styles.serverList} />
    </div>
  )
}
