import React, { FunctionComponent } from 'react'
import { observer } from 'mobx-react'
import cn from 'classnames'

import { Props } from './types'

import { useSelector } from '@app/hooks/common'

import { SortingBox } from './sorting-box'
import { ServerList } from './server-list'
import { ServerMenu } from './server-menu'
import { AddServerDialog } from './add-server-dialog'
import { DeleteServerConfirmDialog } from './delete-server-confirm-dialog'
import { EditServerAddressDialog } from './edit-server-address-dialog'
import { EditServerNameDialog } from './edit-server-name-dialog'
import { EditServerDescriptionDialog } from './edit-server-description-dialog'
import { ManageServerExtraInjectDialog } from './manage-server-extra-inject-dialog'
import { ConnectDialog } from './connect-dialog'

import styles from './styles.scss'

const ServerboardComponent: FunctionComponent<Props> = (props) => {
  const { className } = props

  const {
    serverMenuShown,
    addServerDialogShown,
    deleteServerConfirmDialogShown,
    editServerAddressDialogShown,
    editServerNameDialogShown,
    editServerDescriptionDialogShown,
    manageServerExtraInjectDialogShown,
    connectDialogShown
  } = useSelector(({ server }) => server)

  return (
    <div className={cn(styles.container, className)}>
      <SortingBox />
      <ServerList className={styles.serverList} />

      {serverMenuShown && <ServerMenu />}
      {addServerDialogShown && <AddServerDialog />}
      {deleteServerConfirmDialogShown && <DeleteServerConfirmDialog />}
      {editServerAddressDialogShown && <EditServerAddressDialog />}
      {editServerNameDialogShown && <EditServerNameDialog />}
      {editServerDescriptionDialogShown && <EditServerDescriptionDialog />}
      {manageServerExtraInjectDialogShown && <ManageServerExtraInjectDialog />}
      {connectDialogShown && <ConnectDialog />}
    </div>
  )
}

export const Serverboard = observer(ServerboardComponent)
