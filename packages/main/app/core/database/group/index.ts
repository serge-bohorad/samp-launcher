import { InsertResult, DeleteResult, UpdateResult, getRepository } from 'typeorm'

import { Group as EntityGroup } from '@app/database/entities'

export namespace Group {
  export function getAll(): Promise<EntityGroup[]> {
    return getRepository(EntityGroup)
      .createQueryBuilder('group')
      .select()
      .leftJoinAndSelect('group.servers', 'servers')
      .orderBy('group.id')
      .addOrderBy('servers.id')
      .getMany()
  }

  export function create(groupName: string): EntityGroup {
    return new EntityGroup(groupName)
  }

  export function insert(group: EntityGroup): Promise<InsertResult> {
    return getRepository(EntityGroup).createQueryBuilder().insert().values(group).execute()
  }

  export function deleteById(id: number): Promise<DeleteResult> {
    return getRepository(EntityGroup)
      .createQueryBuilder()
      .delete()
      .where('id = :id', { id })
      .execute()
  }

  export function rename(id: number, name: string): Promise<UpdateResult> {
    return getRepository(EntityGroup)
      .createQueryBuilder()
      .update()
      .set({ name })
      .where('id = :id', { id })
      .execute()
  }

  export function unsetSelected(): Promise<UpdateResult> {
    return getRepository(EntityGroup)
      .createQueryBuilder()
      .update()
      .set({ selected: false })
      .where('selected = true')
      .execute()
  }

  export function setSelected(id: number): Promise<UpdateResult> {
    return getRepository(EntityGroup)
      .createQueryBuilder()
      .update()
      .set({ selected: true })
      .where('id = :id', { id })
      .execute()
  }
}
