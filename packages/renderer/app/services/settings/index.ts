import { errorServerRefreshDelayInvalid } from './data'

import {
  setSettings,
  setCommonNickname,
  getGameDirectory,
  setGameDirectory,
  setAutoSwitchNickname,
  setDeletionConfirm,
  getServerRefreshDelay,
  setServerRefreshDelay,
  setRefreshAllServers,
  setCommonExtraInject
} from '@app/stores/settings'

export async function onFetchSettings(): Promise<void> {
  const [settings] = await invokeMain('SETTINGS_FETCH')

  settings!.commonExtraInject = Pair.from(settings!.commonExtraInject as string[])

  setSettings(settings!)
}

export function onSaveCommonNickname(newNickname: string): void {
  invokeMainUnilaterally('SETTINGS_UPDATE_NICKNAME', newNickname)

  setCommonNickname(newNickname)
}

export async function onSaveGameDirectory(newGameDirectory: string): Promise<string | void> {
  if (getGameDirectory().equal(newGameDirectory)) {
    return
  }

  const [, error] = await invokeMain('SETTINGS_UPDATE_GAME_DIRECTORY', newGameDirectory)

  if (error) {
    return error
  }

  setGameDirectory(newGameDirectory)
}

export function onSaveAutoSwitchNickname(newState: boolean): void {
  invokeMainUnilaterally('SETTINGS_UPDATE_AUTO_SWITCH_NICKNAME', newState)

  setAutoSwitchNickname(newState)
}

export function onSaveDeletionConfirm(newState: boolean): void {
  invokeMainUnilaterally('SETTINGS_UPDATE_DELETION_CONFIRM', newState)

  setDeletionConfirm(newState)
}

export function onSaveServerRefreshDelay(newDelay: number): string | void {
  if (getServerRefreshDelay().equal(newDelay)) {
    return
  }

  if (newDelay < 0) {
    return errorServerRefreshDelayInvalid
  }

  invokeMainUnilaterally('SETTINGS_UPDATE_SERVER_REFRESH_DELAY', newDelay)

  setServerRefreshDelay(newDelay)
}

export function onSaveRefreshAllServers(newState: boolean): void {
  invokeMainUnilaterally('SETTINGS_UPDATE_REFRESH_ALL_SERVERS', newState)

  setRefreshAllServers(newState)
}

export function onSaveCommonExtraInject(newExtraInject: Pair<string>[]): void {
  invokeMainUnilaterally('SETTINGS_UPDATE_EXTRA_INJECT', Pair.values(newExtraInject))

  setCommonExtraInject(newExtraInject)
}
