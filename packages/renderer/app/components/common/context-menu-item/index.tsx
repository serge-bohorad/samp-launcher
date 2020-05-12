import React, { FunctionComponent } from 'react'
import cn from 'classnames'

import { Props } from './types'

import styles from './styles.scss'

export const ContextMenuItem: FunctionComponent<Props> = (props) => {
  const { className, children, onClick } = props

  return (
    <div className={cn(styles.container, className)} onClick={onClick}>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
