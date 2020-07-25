import { DeleteResult, UpdateResult } from 'typeorm'

import { Group as EntityGroup } from '@app/database/entities'

import { Repositories } from '@app/core/repositories'

export namespace Group {
  export function getAll(): Promise<EntityGroup[]> {
    return Repositories.Group.getAll()
  }

  export function getById(id: number): Promise<EntityGroup | undefined> {
    return Repositories.Group.getById(id)
  }

  export async function add(groupName: string): Promise<EntityGroup> {
    const group = Repositories.Group.create(groupName)

    await Repositories.Group.insert(group)

    return group
  }

  export function deleteById(id: number): Promise<DeleteResult> {
    return Repositories.Group.deleteById(id)
  }

  export function setName(id: number, name: string): Promise<UpdateResult> {
    return Repositories.Group.setName(id, name)
  }

  export function unsetSelected(): Promise<UpdateResult> {
    return Repositories.Group.unsetSelected()
  }

  export function setSelected(id: number): Promise<UpdateResult> {
    return Repositories.Group.setSelected(id)
  }

  export async function switchSelected(id: number): Promise<void> {
    await Repositories.Group.unsetSelected()
    await Repositories.Group.setSelected(id)
  }
}
