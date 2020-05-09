import { observable, action } from 'mobx'

import { Server } from '@shared/types/entities'

export class ServerStore {
  readonly servers = observable<Server>([])
  @observable selectedServer: Server | undefined

  @observable addServerDialogShown = false
  @observable deleteServerConfirmDialogShown = false
  @observable editServerAddressDialogShown = false

  @action setServers = (servers: Server[]): void => {
    this.servers.replace(servers)
  }

  @action clearServers = (): void => {
    this.servers.clear()
  }

  @action setSelectedServer = (server?: Server): void => {
    this.selectedServer = server
  }

  @action setAddServerDialogShown = (shown: boolean): void => {
    this.addServerDialogShown = shown
  }

  @action setDeleteServerConfirmDialogShown = (shown: boolean): void => {
    this.deleteServerConfirmDialogShown = shown
  }

  @action setEditServerAddressDialogShown = (shown: boolean): void => {
    this.editServerAddressDialogShown = shown
  }

  @action addServer = (server: Server): void => {
    this.servers.push(server)

    this.setSelectedServer(this.servers.last())
  }

  @action deleteServer = (server: Server): void => {
    this.servers.remove(server)

    if (this.isSelectedServer(server)) {
      this.setSelectedServer(this.servers[0])
    }
  }

  @action setServerNickname = (targetServer: Server, nickname: string): void => {
    targetServer.nickname = nickname
  }

  @action setServerAddress = (targetServer: Server, host: string, port: number): void => {
    targetServer.host = host
    targetServer.port = port
  }

  getServers = (): Server[] => {
    return this.servers
  }

  getSelectedServer = (): Server | undefined => {
    return this.selectedServer
  }

  getServerNickname = (server: Server): string => {
    return server.nickname
  }

  getServerAddress = ({ host, port }: Server): string => {
    return `${host}:${port}`
  }

  isSelectedServer = (server: Server): boolean => {
    return this.selectedServer === server
  }
}

export const serverStore = new ServerStore()

export const {
  setServers,
  setSelectedServer,
  addServer,
  deleteServer,
  setServerAddress,
  getServers,
  getSelectedServer,
  getServerNickname,
  getServerAddress,
  isSelectedServer
} = serverStore
