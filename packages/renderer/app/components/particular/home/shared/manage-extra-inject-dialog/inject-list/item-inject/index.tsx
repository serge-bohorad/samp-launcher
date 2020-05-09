import React, { FunctionComponent, useCallback } from 'react'
import cn from 'classnames'

import { Props } from './types'

import { IconButton } from '@app/components/common'

import styles from './styles.scss'

import IconFile from '@app/assets/icons/file.svg'
import IconFolder from '@app/assets/icons/folder2.svg'
import IconDelete from '@app/assets/icons/cross.svg'

export const ItemInject: FunctionComponent<Props> = (props) => {
  const { className, pair, onClickDelete } = props

  const deleteClickHandler = useCallback(() => {
    onClickDelete(pair)
  }, [pair, onClickDelete])

  const Icon = pair.value.contains('.dll') || pair.value.contains('.asi') ? IconFile : IconFolder

  return (
    <div className={cn(styles.container, className)}>
      <Icon className={styles.icon} />
      <div className={styles.path} title={pair.value}>
        {pair.value}
      </div>
      <IconButton className={styles.buttonDelete} icon={IconDelete} onClick={deleteClickHandler} />
    </div>
  )
}
