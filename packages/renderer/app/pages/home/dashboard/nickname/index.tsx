import React, { FunctionComponent } from 'react'
import cn from 'classnames'

import { Props } from './types'

import { useInputCallback } from '@app/hooks/common'

import { IconInput } from '@app/components/common'

import styles from './styles.scss'

import UserIcon from '@app/assets/icons/user.svg'

export const Nickname: FunctionComponent<Props> = (props) => {
  const { className } = props

  const onChangeNickname = useInputCallback(({ value }) => {
    //
  })

  return (
    <IconInput
      className={cn(styles.input, className)}
      placeholder="Nickname"
      icon={UserIcon}
      value=""
      onChange={onChangeNickname}
    />
  )
}
