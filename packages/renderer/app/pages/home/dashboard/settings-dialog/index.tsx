import React, { FunctionComponent, useCallback } from 'react'
import { observer } from 'mobx-react'

import { useSelector } from '@app/hooks/common'

import { Dialog } from '@app/components/common'
import { MainSettings } from './main-settings'
import { ServerSettings } from './server-settings'
import { MiscSettings } from './misc-settings'

import styles from './styles.scss'

const SettingsDialogComponent: FunctionComponent = () => {
  const {
    editGameDirectoryDialogShown,
    editServerRefreshDelayDialogShown,
    manageCommonExtraInjectDialogShown,
    setSettingsDialogShown
  } = useSelector(({ settings }) => settings)

  const onClickClose = useCallback(() => {
    setSettingsDialogShown(false)
  }, [])

  const closable =
    !editGameDirectoryDialogShown &&
    !editServerRefreshDelayDialogShown &&
    !manageCommonExtraInjectDialogShown

  return (
    <Dialog
      className={styles.container}
      bodyClassName={styles.body}
      caption="Settings"
      closable={closable}
      firstButtonText="Close"
      onClickClose={onClickClose}
      onClickFirstButton={onClickClose}
    >
      <MainSettings />
      <ServerSettings />
      <MiscSettings />
    </Dialog>
  )
}

export const SettingsDialog = observer(SettingsDialogComponent)
