import React, { FunctionComponent, useCallback } from 'react'
import cn from 'classnames'

import { Props } from './types'

import { useSelector } from '@app/hooks/common'

import { IconButton } from '@app/components/common'

import styles from './styles.scss'

import IconRename from '@app/assets/icons/edit.svg'
import IconDelete from '@app/assets/icons/cross.svg'

export const ControlBox: FunctionComponent<Props> = (props) => {
  const { className, group } = props

  const {
    setSubjectGroup,
    setRenameGroupDialogShown,
    setDeleteGroupConfirmDialogShown
  } = useSelector(({ group }) => group)

  const onClickRename = useCallback(() => {
    setSubjectGroup(group)

    setRenameGroupDialogShown(true)
  }, [group])

  const onClickDelete = useCallback(() => {
    setSubjectGroup(group)

    setDeleteGroupConfirmDialogShown(true)
  }, [group])

  return (
    <div className={cn(styles.container, className)}>
      <IconButton
        className={styles.button}
        title="Rename group"
        icon={IconRename}
        onClick={onClickRename}
      />
      <IconButton
        className={cn(styles.button, styles.buttonDelete)}
        title="Delete group"
        icon={IconDelete}
        onClick={onClickDelete}
      />
    </div>
  )
}
