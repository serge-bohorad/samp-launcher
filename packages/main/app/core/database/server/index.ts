import { InsertResult, getRepository, DeleteResult, UpdateResult } from 'typeorm'

import { Server as EntityServer, Group } from '@app/database/entities'

export namespace Server {
  export function getById(id: number): Promise<EntityServer | undefined> {
    return getRepository(EntityServer)
      .createQueryBuilder('server')
      .select()
      .leftJoinAndSelect('server.group', 'group')
      .where('server.id = :id', { id })
      .getOne()
  }

  export function create(host: string, port: number, group: Group): EntityServer {
    return new EntityServer(host, port, group)
  }

  export function insert(server: EntityServer): Promise<InsertResult> {
    return getRepository(EntityServer).createQueryBuilder().insert().values(server).execute()
  }

  export function deleteById(id: number): Promise<DeleteResult> {
    return getRepository(EntityServer)
      .createQueryBuilder()
      .delete()
      .where('id = :id', { id })
      .execute()
  }

  export function setNickname(id: number, nickname: string): Promise<UpdateResult> {
    return getRepository(EntityServer)
      .createQueryBuilder()
      .update()
      .set({ nickname })
      .where('id = :id', { id })
      .execute()
  }

  export function setAddress(id: number, host: string, port: number): Promise<UpdateResult> {
    return getRepository(EntityServer)
      .createQueryBuilder()
      .update()
      .set({ host, port })
      .where('id = :id', { id })
      .execute()
  }
}
