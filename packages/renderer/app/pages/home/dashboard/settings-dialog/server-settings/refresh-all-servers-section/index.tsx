import React, { FunctionComponent } from 'react'
import { observer } from 'mobx-react'

import { Props } from './types'

import { onSaveRefreshAllServers } from '@app/services/settings'

import { useSelector, useInputCallback } from '@app/hooks/common'

import { SwitchableSection } from '@app/components/particular/home/dashboard/settings-dialog/switchable-section'

const RefreshAllServersSectionComponent: FunctionComponent<Props> = (props) => {
  const { className } = props

  const { refreshAllServers } = useSelector(({ settings }) => settings)

  const onChange = useInputCallback(({ checked }) => {
    onSaveRefreshAllServers(checked)
  })

  return (
    <SwitchableSection className={className} checked={refreshAllServers} onChange={onChange}>
      Refresh all servers
    </SwitchableSection>
  )
}

export const RefreshAllServersSection = observer(RefreshAllServersSectionComponent)
