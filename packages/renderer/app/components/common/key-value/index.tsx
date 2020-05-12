import React, { FunctionComponent } from 'react'
import cn from 'classnames'

import { Props } from './types'

import styles from './styles.scss'

export const KeyValue: FunctionComponent<Props> = (props) => {
  const { className, keyClassName, valueClassName, title, selectable, keyText, children } = props

  return (
    <div className={cn(styles.container, className)}>
      <div className={cn(styles.key, keyClassName)}>{keyText}</div>
      <div
        className={cn(styles.value, { [styles.unselectable]: !selectable }, valueClassName)}
        title={title}
      >
        {children}
      </div>
    </div>
  )
}
