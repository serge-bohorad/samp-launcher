import React, { FunctionComponent, useCallback } from 'react'
import cn from 'classnames'

import { Props } from './types'

import { openLink } from '@app/services/misc'

import styles from './styles.scss'

export const Link: FunctionComponent<Props> = (props) => {
  const { className, text } = props

  const onClick = useCallback(() => {
    openLink(text)
  }, [text])

  return (
    <span className={cn(styles.link, className)} onClick={onClick}>
      {text}
    </span>
  )
}
