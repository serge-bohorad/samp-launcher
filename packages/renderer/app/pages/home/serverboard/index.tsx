import React, { FunctionComponent } from 'react'

import { Props } from './types'

import { SortingBox } from './sorting-box'

export const Serverboard: FunctionComponent<Props> = (props) => {
  const { className } = props

  return (
    <div className={className}>
      <SortingBox />
    </div>
  )
}
