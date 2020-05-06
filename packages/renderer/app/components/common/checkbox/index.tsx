import React, { FunctionComponent } from 'react'
import cn from 'classnames'

import { Props } from './types'

import styles from './styles.scss'

export const Checkbox: FunctionComponent<Props> = (props) => {
  const { className, name, checked, children, onChange } = props

  return (
    <label className={cn(styles.container, className)}>
      <label className={cn(styles.label, { [styles.checked]: checked })}>
        <input
          type="checkbox"
          name={name}
          className={styles.checkbox}
          checked={checked}
          onChange={onChange}
        />
      </label>
      <div className={styles.content}>{children}</div>
    </label>
  )
}
