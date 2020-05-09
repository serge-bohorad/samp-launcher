import { UpdateResult } from 'typeorm'

import { Settings as EntitySettings } from '@app/database/entities'

import { Database } from '@app/core/database'

export namespace Settings {
  export async function doesEntryExists(): Promise<boolean> {
    const settings = await Database.Settings.getAll()

    return Boolean(settings)
  }

  export async function getAll(): Promise<EntitySettings> {
    const settings = await Database.Settings.getAll()

    return settings!
  }

  export async function initEntry(): Promise<EntitySettings> {
    const settings = Database.Settings.create()

    await Database.Settings.insert(settings)

    return settings
  }

  export function setNickname(nickname: string): Promise<UpdateResult> {
    return Database.Settings.setNickname(nickname)
  }

  export function setGameDirectory(gameDirectory: string): Promise<UpdateResult> {
    return Database.Settings.setGameDirectory(gameDirectory)
  }

  export function setAutoSwitchNickname(state: boolean): Promise<UpdateResult> {
    return Database.Settings.setAutoSwitchNickname(state)
  }

  export function setDeletionConfirm(state: boolean): Promise<UpdateResult> {
    return Database.Settings.setDeletionConfirm(state)
  }

  export function setServerRefreshDelay(delay: number): Promise<UpdateResult> {
    return Database.Settings.setServerRefreshDelay(delay)
  }

  export function setRefreshAllServers(state: boolean): Promise<UpdateResult> {
    return Database.Settings.setRefreshAllServers(state)
  }

  export function setExtraInject(extraInject: string[]): Promise<UpdateResult> {
    return Database.Settings.setExtraInject(extraInject)
  }
}
