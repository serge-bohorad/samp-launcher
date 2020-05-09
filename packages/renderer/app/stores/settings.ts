import { observable, action } from 'mobx'

import { Settings } from '@shared/types/entities/settings'

export class SettingsStore {
  @observable commonNickname = ''
  @observable gameDirectory = ''
  @observable autoSwitchNickname = false
  @observable deletionConfirm = false
  @observable serverRefreshDelay = 0
  @observable refreshAllServers = false
  readonly commonExtraInject = observable<Pair<string>>([])

  @observable settingsDialogShown = false
  @observable editGameDirectoryDialogShown = false
  @observable editServerRefreshDelayDialogShown = false
  @observable manageCommonExtraInjectDialogShown = false

  @action setSettings = (settings: Settings): void => {
    this.commonNickname = settings.commonNickname
    this.gameDirectory = settings.gameDirectory
    this.autoSwitchNickname = settings.autoSwitchNickname
    this.deletionConfirm = settings.deletionConfirm
    this.serverRefreshDelay = settings.serverRefreshDelay
    this.refreshAllServers = settings.refreshAllServers

    this.commonExtraInject.replace(settings.commonExtraInject as Pair<string>[])
  }

  @action setCommonNickname = (nickname: string): void => {
    this.commonNickname = nickname
  }

  @action setGameDirectory = (directory: string): void => {
    this.gameDirectory = directory
  }

  @action setAutoSwitchNickname = (state: boolean): void => {
    this.autoSwitchNickname = state
  }

  @action setDeletionConfirm = (state: boolean): void => {
    this.deletionConfirm = state
  }

  @action setServerRefreshDelay = (delay: number): void => {
    this.serverRefreshDelay = delay
  }

  @action setRefreshAllServers = (state: boolean): void => {
    this.refreshAllServers = state
  }

  @action setCommonExtraInject = (extraInject: Pair<string>[]): void => {
    this.commonExtraInject.replace(extraInject)
  }

  @action setSettingsDialogShown = (shown: boolean): void => {
    this.settingsDialogShown = shown
  }

  @action setEditGameDirectoryDialogShown = (shown: boolean): void => {
    this.editGameDirectoryDialogShown = shown
  }

  @action setEditServerRefreshDelayDialogShown = (shown: boolean): void => {
    this.editServerRefreshDelayDialogShown = shown
  }

  @action setManageCommonExtraInjectDialogShown = (shown: boolean): void => {
    this.manageCommonExtraInjectDialogShown = shown
  }

  getCommonNickname = (): string => {
    return this.commonNickname
  }

  getGameDirectory = (): string => {
    return this.gameDirectory
  }

  getDeletionConfirm = (): boolean => {
    return this.deletionConfirm
  }

  getServerRefreshDelay = (): number => {
    return this.serverRefreshDelay
  }

  getRefreshAllServers = (): boolean => {
    return this.refreshAllServers
  }
}

export const settingsStore = new SettingsStore()

export const {
  setSettings,
  setCommonNickname,
  setGameDirectory,
  setAutoSwitchNickname,
  setDeletionConfirm,
  setServerRefreshDelay,
  setRefreshAllServers,
  setCommonExtraInject,
  getCommonNickname,
  getGameDirectory,
  getDeletionConfirm,
  getServerRefreshDelay,
  getRefreshAllServers
} = settingsStore
