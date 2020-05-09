import React, { FunctionComponent } from 'react'
import cn from 'classnames'

import { Props } from './types'

import { SingleSwitch } from '../single-switch'

import styles from './styles.scss'

export const Switch: FunctionComponent<Props> = (props) => {
  const { className, children } = props

  return (
    <label className={cn(styles.container, className)}>
      <SingleSwitch {...props} />
      <div className={styles.content}>{children}</div>
    </label>
  )
}
