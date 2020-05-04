import React, { FunctionComponent } from 'react'
import cn from 'classnames'

import { Props } from './types'

import { useInputCallback } from '@app/hooks/common'

import { IconInput } from '@app/components/common'

import styles from './styles.scss'

import SearchIcon from '@app/assets/icons/magnifier.svg'

export const SearchServer: FunctionComponent<Props> = (props) => {
  const { className } = props

  const onChangeServerName = useInputCallback(() => {
    //
  })

  return (
    <IconInput
      className={cn(styles.input, className)}
      placeholder="Search server"
      icon={SearchIcon}
      value=""
      onChange={onChangeServerName}
    />
  )
}
