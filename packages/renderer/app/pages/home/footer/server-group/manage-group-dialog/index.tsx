import React, { FunctionComponent, useCallback } from 'react'
import { observer } from 'mobx-react'
import cn from 'classnames'

import { useSelector } from '@app/hooks/common'

import { Dialog } from '@app/components/common'
import { GroupList } from './group-list'

import styles from './styles.scss'

const ManageGroupDialogComponent: FunctionComponent = () => {
  const {
    groups,
    renameGroupDialogShown,
    deleteGroupConfirmDialogShown,
    setManageGroupDialogShown
  } = useSelector(({ group }) => group)

  const onClickClose = useCallback(() => {
    setManageGroupDialogShown(false)
  }, [])

  const closable = !renameGroupDialogShown && !deleteGroupConfirmDialogShown

  return (
    <Dialog
      className={cn(styles.container, { [styles.filled]: groups.length })}
      bodyClassName={styles.body}
      caption="Manage groups"
      concave={!groups.length}
      closable={closable}
      firstButtonText="Close"
      onClickClose={onClickClose}
      onClickFirstButton={onClickClose}
    >
      {groups.length ? <GroupList /> : <div className={styles.hintEmpty}>No existing groups</div>}
    </Dialog>
  )
}

export const ManageGroupDialog = observer(ManageGroupDialogComponent)
