import React, { FunctionComponent } from 'react'
import { observer } from 'mobx-react'
import cn from 'classnames'

import { Props } from './types'

import { useSelector } from '@app/hooks/common'

import { SectionCaption } from '@app/components/particular/home/footer/section-caption'
import { ControlBox } from './control-box'
import { CreateGroupDialog } from './create-group-dialog'
import { DeleteGroupConfirmDialog } from './delete-group-confirm-dialog'
import { ManageGroupDialog } from './manage-group-dialog'
import { RenameGroupDialog } from './rename-group-dialog'

import styles from './styles.scss'

const ServerGroupComponent: FunctionComponent<Props> = (props) => {
  const { className } = props

  const {
    selectedGroup,
    createGroupDialogShown,
    deleteGroupConfirmDialogShown,
    manageGroupDialogShown,
    renameGroupDialogShown
  } = useSelector(({ group }) => group)

  const selectedGroupName = selectedGroup?.name || 'No selected group'

  return (
    <div className={cn(styles.container, className)}>
      <SectionCaption text="Server group" />
      <div className={styles.selectedGroup}>{selectedGroupName}</div>
      <ControlBox className={styles.controlBox} />

      {createGroupDialogShown && <CreateGroupDialog />}
      {deleteGroupConfirmDialogShown && <DeleteGroupConfirmDialog />}
      {manageGroupDialogShown && <ManageGroupDialog />}
      {renameGroupDialogShown && <RenameGroupDialog />}
    </div>
  )
}

export const ServerGroup = observer(ServerGroupComponent)
