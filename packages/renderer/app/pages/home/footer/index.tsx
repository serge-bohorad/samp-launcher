import React, { FunctionComponent } from 'react'
import cn from 'classnames'

import { Props } from './types'

import { ServerName } from './server-name'
import { ServerDetail } from './server-detail'
import { ServerDescription } from './server-description'
import { ServerGroup } from './server-group'
import { ServerStats } from './server-stats'

import styles from './styles.scss'

export const Footer: FunctionComponent<Props> = (props) => {
  const { className } = props

  return (
    <div className={cn(styles.container, className)}>
      <ServerName />
      <div className={styles.body}>
        <ServerDetail className={styles.section} />
        <ServerDescription className={styles.section} />
        <ServerGroup className={styles.section} />
      </div>
      <ServerStats className={styles.serverStats} />
    </div>
  )
}
