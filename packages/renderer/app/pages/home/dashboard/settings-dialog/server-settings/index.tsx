import React, { FunctionComponent } from 'react'

import { Props } from './types'

import { SectionContainer } from '@app/components/particular/home/dashboard/settings-dialog/section-container'
import { ServerRefreshDelaySection } from './server-refresh-delay-section'
import { RefreshAllServersSection } from './refresh-all-servers-section'

export const ServerSettings: FunctionComponent<Props> = (props) => {
  const { className } = props

  return (
    <SectionContainer className={className} caption="Server">
      <ServerRefreshDelaySection />
      <RefreshAllServersSection />
    </SectionContainer>
  )
}
