import React, { FunctionComponent } from 'react'
import cn from 'classnames'

import { Props } from './types'

import { Button } from '../../button'

import styles from './styles.scss'

export const Footer: FunctionComponent<Props> = (props) => {
  const {
    className,
    firstButtonText = 'Ok',
    secondButtonText = 'Close',
    onClickFirstButton,
    onClickSecondButton
  } = props

  return (
    <div className={cn(styles.container, className)}>
      {onClickFirstButton && (
        <Button className={styles.button} onClick={onClickFirstButton}>
          {firstButtonText}
        </Button>
      )}
      {onClickSecondButton && (
        <Button className={styles.button} onClick={onClickSecondButton}>
          {secondButtonText}
        </Button>
      )}
    </div>
  )
}
