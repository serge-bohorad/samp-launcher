import React, { FunctionComponent } from 'react'
import cn from 'classnames'

import { Props } from './types'

import styles from './styles.scss'

export const SingleSwitch: FunctionComponent<Props> = (props) => {
  const { className, checked, onChange } = props

  return (
    <label className={cn(styles.label, { [styles.checked]: checked }, className)}>
      <input className={styles.checkbox} type="checkbox" checked={checked} onChange={onChange} />
    </label>
  )
}
