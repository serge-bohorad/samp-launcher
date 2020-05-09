import React, { forwardRef } from 'react'
import cn from 'classnames'

import { Props } from './types'

import styles from './styles.scss'

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    className,
    type,
    name,
    min,
    max,
    step,
    disabled,
    invalid,
    placeholder,
    value,
    onChange,
    onBlur
  } = props

  return (
    <input
      ref={ref}
      className={cn(styles.input, className, { [styles.invalid]: invalid })}
      type={type}
      name={name}
      min={min}
      max={max}
      step={step}
      disabled={disabled}
      autoComplete="off"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  )
})
