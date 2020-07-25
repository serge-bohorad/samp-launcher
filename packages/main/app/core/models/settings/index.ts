import { UpdateResult } from 'typeorm'

import { Settings as EntitySettings } from '@app/database/entities'

import { Repositories } from '@app/core/repositories'

export namespace Settings {
  export async function doesEntryExists(): Promise<boolean> {
    const settings = await Repositories.Settings.getAll()

    return !!settings
  }

  export async function getAll(): Promise<EntitySettings> {
    const settings = await Repositories.Settings.getAll()

    return settings!
  }

  export async function initEntry(): Promise<EntitySettings> {
    const settings = Repositories.Settings.create()

    await Repositories.Settings.insert(settings)

    return settings
  }

  export function setNickname(nickname: string): Promise<UpdateResult> {
    return Repositories.Settings.setNickname(nickname)
  }

  export function setGameDirectory(gameDirectory: string): Promise<UpdateResult> {
    return Repositories.Settings.setGameDirectory(gameDirectory)
  }

  export function setAutoSwitchNickname(state: boolean): Promise<UpdateResult> {
    return Repositories.Settings.setAutoSwitchNickname(state)
  }

  export function setDeletionConfirm(state: boolean): Promise<UpdateResult> {
    return Repositories.Settings.setDeletionConfirm(state)
  }

  export function setServerRefreshDelay(delay: number): Promise<UpdateResult> {
    return Repositories.Settings.setServerRefreshDelay(delay)
  }

  export function setRefreshAllServers(state: boolean): Promise<UpdateResult> {
    return Repositories.Settings.setRefreshAllServers(state)
  }

  export function setExtraInject(extraInject: string[]): Promise<UpdateResult> {
    return Repositories.Settings.setExtraInject(extraInject)
  }
}
