import React, { forwardRef } from 'react'
import cn from 'classnames'

import { Props } from './types'

import { Input } from '../input'

import styles from './styles.scss'

export const IconInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className, icon: Icon, disabled } = props

  return (
    <div className={cn(styles.container, className)}>
      <Input ref={ref} {...props} className={styles.input} />
      <Icon className={cn(styles.icon, { [styles.disabledIcon]: disabled })} />
    </div>
  )
})
