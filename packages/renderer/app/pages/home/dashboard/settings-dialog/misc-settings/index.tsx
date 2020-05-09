import React, { FunctionComponent } from 'react'

import { Props } from './types'

import { SectionContainer } from '@app/components/particular/home/dashboard/settings-dialog/section-container'
import { CommonExtraInjectSection } from './common-extra-inject-section'

export const MiscSettings: FunctionComponent<Props> = (props) => {
  const { className } = props

  return (
    <SectionContainer className={className} caption="Misc">
      <CommonExtraInjectSection />
    </SectionContainer>
  )
}
