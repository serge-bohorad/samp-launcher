import React, { FunctionComponent } from 'react'
import { observer } from 'mobx-react'

import { useSelector } from '@app/hooks/common'

import { ItemGroup } from './item-group'

const GroupListComponent: FunctionComponent = () => {
  const { groups, isSelectedGroup } = useSelector(({ group }) => group)

  return (
    <>
      {groups.map((group) => (
        <ItemGroup key={group.id} selected={isSelectedGroup(group)} group={group} />
      ))}
    </>
  )
}

export const GroupList = observer(GroupListComponent)
