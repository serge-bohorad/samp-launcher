import React, { FunctionComponent } from 'react'
import cn from 'classnames'

import { Props } from './types'

import { Button } from '@app/components/common'

import styles from './styles.scss'

export const ButtonSort: FunctionComponent<Props> = (props) => {
  const { className, text, onClick } = props

  return (
    <Button className={cn(styles.button, className)} onClick={onClick}>
      {text}
    </Button>
  )
}
