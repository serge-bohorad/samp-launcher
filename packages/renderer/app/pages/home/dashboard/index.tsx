import React, { FunctionComponent } from 'react'
import { observer } from 'mobx-react'
import cn from 'classnames'

import { Props } from './types'

import { useSelector } from '@app/hooks/common'

import { Nickname } from './nickname'
import { ControlBox } from './control-box'
import { SearchServer } from './search-server'
import { SettingsDialog } from './settings-dialog'

import styles from './styles.scss'

const DashboardComponent: FunctionComponent<Props> = (props) => {
  const { className } = props

  const { settingsDialogShown } = useSelector(({ settings }) => settings)

  return (
    <div className={cn(styles.container, className)}>
      <Nickname className={styles.nickname} />
      <ControlBox className={styles.controlBox} />
      <SearchServer className={styles.searchServer} />

      {settingsDialogShown && <SettingsDialog />}
    </div>
  )
}

export const Dashboard = observer(DashboardComponent)
