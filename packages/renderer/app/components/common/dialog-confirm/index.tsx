import React, { FunctionComponent, useState, useCallback } from 'react'
import cn from 'classnames'

import { Props } from './types'

import { useInputCallback } from '@app/hooks/common'

import { Dialog } from '../dialog'
import { Checkbox } from '../checkbox'

import styles from './styles.scss'

export const DialogConfirm: FunctionComponent<Props> = (props) => {
  const {
    className,
    bodyClassName,
    checkboxHint,
    firstButtonText = 'Yes',
    secondButtonText = 'No',
    children,
    onClickFirstButton
  } = props

  const [showConfirmNext, setShowConfirmNext] = useState(false)

  const onChange = useInputCallback(({ checked }) => {
    setShowConfirmNext(checked)
  })

  const firstButtonClickHandler = useCallback(() => {
    onClickFirstButton(showConfirmNext)
  }, [showConfirmNext, onClickFirstButton])

  return (
    <Dialog
      {...props}
      className={cn(styles.container, className)}
      bodyClassName={cn(styles.body, bodyClassName)}
      concave={true}
      firstButtonText={firstButtonText}
      secondButtonText={secondButtonText}
      onClickFirstButton={firstButtonClickHandler}
    >
      <span className={styles.content}>{children}</span>
      <Checkbox className={styles.checkbox} checked={showConfirmNext} onChange={onChange}>
        {checkboxHint}
      </Checkbox>
    </Dialog>
  )
}
