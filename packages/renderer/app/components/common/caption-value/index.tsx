import React, { FunctionComponent } from 'react'
import cn from 'classnames'

import { Props } from './types'

import styles from './styles.scss'

export const CaptionValue: FunctionComponent<Props> = (props) => {
  const { className, caption, selectable, children } = props

  return (
    <div className={cn(styles.container, className)}>
      <div className={styles.caption}>{caption}</div>
      <div className={cn(styles.value, { [styles.unselected]: !selectable })}>{children}</div>
    </div>
  )
}
