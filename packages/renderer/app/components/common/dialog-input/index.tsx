import React, { FunctionComponent, useRef, useState, useCallback, useEffect } from 'react'

import { Props } from './types'

import { useInputCallback } from '@app/hooks/common'

import { Dialog } from '../dialog'
import { Input } from '../input'

import styles from './styles.scss'

export const DialogInput: FunctionComponent<Props> = (props) => {
  const {
    className,
    closable,
    disabled,
    dimming,
    autoSelect,
    caption,
    type,
    min,
    max,
    step,
    placeholder,
    initialValue = '',
    error,
    firstButtonText,
    secondButtonText,
    onClickClose,
    onClickFirstButton,
    onClickSecondButton
  } = props

  const inputRef = useRef<HTMLInputElement>(null)

  const [input, setInput] = useState(String(initialValue))

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
      className={className}
      closable={closable}
      disabled={disabled}
      dimming={dimming}
      caption={caption}
      firstButtonText={firstButtonText}
      secondButtonText={secondButtonText}
      onClickClose={onClickClose}
      onClickFirstButton={firstButtonClickHandler}
      onClickSecondButton={onClickSecondButton}
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
