import React, { FunctionComponent } from 'react'
import { observer } from 'mobx-react'
import cn from 'classnames'

import { Props } from './types'

import { useSelector } from '@app/hooks/common'

import { SortingBox } from './sorting-box'
import { ServerList } from './server-list'
import { AddServerDialog } from './add-server-dialog'
import { DeleteServerConfirmDialog } from './delete-server-confirm-dialog'
import { EditServerAddressDialog } from './edit-server-address-dialog'

import styles from './styles.scss'

const ServerboardComponent: FunctionComponent<Props> = (props) => {
  const { className } = props

  const {
    addServerDialogShown,
    deleteServerConfirmDialogShown,
    editServerAddressDialogShown
  } = useSelector(({ server }) => server)

  return (
    <div className={cn(styles.container, className)}>
      <SortingBox />
      <ServerList className={styles.serverList} />

      {addServerDialogShown && <AddServerDialog />}
      {deleteServerConfirmDialogShown && <DeleteServerConfirmDialog />}
      {editServerAddressDialogShown && <EditServerAddressDialog />}
    </div>
  )
}

export const Serverboard = observer(ServerboardComponent)
