import { getRepository, InsertResult, UpdateResult } from 'typeorm'

import { Settings as EntitySettings } from '@app/database/entities'

export namespace Settings {
  export function getAll(): Promise<EntitySettings | undefined> {
    return getRepository(EntitySettings).createQueryBuilder().select().where('id = 0').getOne()
  }

  export function create(): EntitySettings {
    return new EntitySettings()
  }

  export function insert(settings: EntitySettings): Promise<InsertResult> {
    return getRepository(EntitySettings).createQueryBuilder().insert().values(settings).execute()
  }

  export function setNickname(nickname: string): Promise<UpdateResult> {
    return getRepository(EntitySettings)
      .createQueryBuilder()
      .update()
      .set({ nickname })
      .where('id = 0')
      .execute()
  }

  export function setGameDirectory(gameDirectory: string): Promise<UpdateResult> {
    return getRepository(EntitySettings)
      .createQueryBuilder()
      .update()
      .set({ gameDirectory })
      .where('id = 0')
      .execute()
  }

  export function setAutoSwitchNickname(autoSwitchNickname: boolean): Promise<UpdateResult> {
    return getRepository(EntitySettings)
      .createQueryBuilder()
      .update()
      .set({ autoSwitchNickname })
      .where('id = 0')
      .execute()
  }

  export function setDeletionConfirm(deletionConfirm: boolean): Promise<UpdateResult> {
    return getRepository(EntitySettings)
      .createQueryBuilder()
      .update()
      .set({ deletionConfirm })
      .where('id = 0')
      .execute()
  }

  export function setServerRefreshDelay(serverRefreshDelay: number): Promise<UpdateResult> {
    return getRepository(EntitySettings)
      .createQueryBuilder()
      .update()
      .set({ serverRefreshDelay })
      .where('id = 0')
      .execute()
  }

  export function setRefreshAllServers(refreshAllServers: boolean): Promise<UpdateResult> {
    return getRepository(EntitySettings)
      .createQueryBuilder()
      .update()
      .set({ refreshAllServers })
      .where('id = 0')
      .execute()
  }

  export function setExtraInject(extraInject: string[]): Promise<UpdateResult> {
    return getRepository(EntitySettings)
      .createQueryBuilder()
      .update()
      .set({ extraInject })
      .where('id = 0')
      .execute()
  }
}
