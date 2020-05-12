import React, { FunctionComponent } from 'react'
import { observer } from 'mobx-react'
import cn from 'classnames'

import { Props } from './types'

import { useInputCallback, useSelector } from '@app/hooks/common'

import { IconInput } from '@app/components/common'

import styles from './styles.scss'

import SearchIcon from '@app/assets/icons/magnifier.svg'

const SearchServerComponent: FunctionComponent<Props> = (props) => {
  const { className } = props

  const { serverFilter, setServerFilter } = useSelector(({ server }) => server)

  const onChangeFilter = useInputCallback(({ value }) => {
    setServerFilter(value)
  })

  return (
    <IconInput
      className={cn(styles.input, className)}
      placeholder="Search server"
      icon={SearchIcon}
      value={serverFilter}
      onChange={onChangeFilter}
    />
  )
}

export const SearchServer = observer(SearchServerComponent)
