import React, { FunctionComponent } from 'react'
import cn from 'classnames'

import { Props } from './types'

import styles from './styles.scss'

export const ServerName: FunctionComponent<Props> = (props) => {
  const { className } = props

  return <div className={cn(styles.container, className)}>Diamond Role play Ruby</div>
}
