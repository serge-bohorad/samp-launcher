import React, { FunctionComponent, useState, useCallback } from 'react'
import cn from 'classnames'

import { Props } from './types'

import { useInputCallback } from '@app/hooks/common'

import { Dialog } from '../dialog'
import { Checkbox } from '../checkbox'

import styles from './styles.scss'

export const QuestionDialog: FunctionComponent<Props> = (props) => {
  const { className, bodyClassName, children, onClickFirstButton } = props

  const [askNext, setAskNext] = useState(true)

  const onChange = useInputCallback(({ checked }) => {
    setAskNext(!checked)
  })

  const firstButtonClickHandler = useCallback(() => {
    onClickFirstButton(askNext)
  }, [askNext])

  return (
    <Dialog
      {...props}
      className={cn(styles.container, className)}
      bodyClassName={cn(styles.body, bodyClassName)}
      concave={true}
      firstButtonText="Yes"
      secondButtonText="No"
      onClickFirstButton={firstButtonClickHandler}
    >
      <div className={styles.content}>{children}</div>
      <Checkbox className={styles.checkbox} checked={!askNext} onChange={onChange}>
        Do not ask me anymore
      </Checkbox>
    </Dialog>
  )
}
