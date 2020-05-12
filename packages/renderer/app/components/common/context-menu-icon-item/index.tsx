import React, { FunctionComponent } from 'react'

import { Props } from './types'

import { ContextMenuItem } from '../context-menu-item'

import styles from './styles.scss'

export const ContextMenuIconItem: FunctionComponent<Props> = (props) => {
  const { className, icon: Icon, children, onClick } = props

  return (
    <ContextMenuItem className={className} onClick={onClick}>
      <div className={styles.container}>
        <Icon className={styles.icon} />
        <div className={styles.content}>{children}</div>
      </div>
    </ContextMenuItem>
  )
}
