import React, { FunctionComponent, useRef, useState, useCallback, useEffect } from 'react'
import cn from 'classnames'

import { Props } from './types'

import { useInputCallback } from '@app/hooks/common'

import { Dialog } from '../dialog'
import { Input } from '../input'

import styles from './styles.scss'

export const DialogInput: FunctionComponent<Props> = (props) => {
  const {
    className,
    autoSelect,
    type,
    min,
    max,
    step,
    placeholder,
    initialValue = '',
    error,
    onClickFirstButton
  } = props

  const [input, setInput] = useState(String(initialValue))

  const inputRef = useRef<HTMLInputElement>(null)

  const onChange = useInputCallback(({ value }) => {
    setInput(value)
  })

  const firstButtonClickHandler = useCallback(() => {
    onClickFirstButton(input)
  }, [input, onClickFirstButton])

  useEffect(() => {
    inputRef.current!.focus()

    if (autoSelect) {
      inputRef.current!.select()
    }
  }, [])

  return (
    <Dialog
      {...props}
      className={cn(styles.container, className)}
      onClickFirstButton={firstButtonClickHandler}
    >
      <Input
        ref={inputRef}
        className={styles.input}
        type={type}
        min={min}
        max={max}
        step={step}
        placeholder={placeholder}
        value={input}
        onChange={onChange}
      />
      <div className={styles.error}>{error}</div>
    </Dialog>
  )
}
