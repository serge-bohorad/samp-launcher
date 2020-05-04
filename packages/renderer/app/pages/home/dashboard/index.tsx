import React, { FunctionComponent } from 'react'
import cn from 'classnames'

import { Props } from './types'

import { Nickname } from './nickname'

import styles from './styles.scss'
import { ControlBox } from './control-box'
import { SearchServer } from './search-server'

export const Dashboard: FunctionComponent<Props> = (props) => {
  const { className } = props

  return (
    <div className={cn(styles.container, className)}>
      <Nickname className={styles.nickname} />
      <ControlBox className={styles.controlBox} />
      <SearchServer className={styles.searchServer} />
    </div>
  )
}
