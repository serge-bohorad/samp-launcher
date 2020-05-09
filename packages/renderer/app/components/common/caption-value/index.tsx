import React, { FunctionComponent } from 'react'
import cn from 'classnames'

import { Props } from './types'

import styles from './styles.scss'

export const CaptionValue: FunctionComponent<Props> = (props) => {
  const {
    className,
    captionClassName,
    valueClassName,
    caption,
    title,
    selectable,
    children
  } = props

  return (
    <div className={cn(styles.container, className)}>
      <div className={cn(styles.caption, captionClassName)}>{caption}</div>
      <div
        className={cn(styles.value, { [styles.unselected]: !selectable }, valueClassName)}
        title={title}
      >
        {children}
      </div>
    </div>
  )
}
