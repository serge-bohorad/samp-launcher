import React, { FunctionComponent } from 'react'
import cn from 'classnames'

import { Props } from './types'

import { SingleSwitch } from '@app/components/common'

import styles from './styles.scss'

export const SwitchableSection: FunctionComponent<Props> = (props) => {
  const { className, title, checked, children, onChange } = props

  return (
    <label className={cn(styles.container, className)} title={title}>
      <div className={styles.content}>{children}</div>
      <SingleSwitch checked={checked} onChange={onChange} />
    </label>
  )
}
