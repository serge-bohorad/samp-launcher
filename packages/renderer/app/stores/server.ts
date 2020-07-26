import { observable, computed, action } from 'mobx'

import { Server, ServerInfo } from '@shared/types/entities'
import { SortableFields } from '@app/types/sortable-fields'

export class ServerStore {
  readonly servers = observable<Server>([])
  @observable selectedServer: Server | undefined
  @observable serverFilter = ''

  @observable serverMenuShown = false
  @observable addServerDialogShown = false
  @observable deleteServerConfirmDialogShown = false
  @observable editServerAddressDialogShown = false
  @observable editServerNameDialogShown = false
  @observable editServerDescriptionDialogShown = false
  @observable manageServerExtraInjectDialogShown = false
  @observable connectDialogShown = false

  @computed get filteredServers(): Server[] {
    return this.serverFilter ? this.filterServersByName() : this.servers
  }

  @action setServers = (servers: Server[]): void => {
    this.servers.replace(servers)

    this.setSelectedServer(this.servers[0])
  }

  @action clearServers = (): void => {
    this.servers.clear()

    this.setSelectedServer()
  }

  @action setSelectedServer = (server?: Server): void => {
    this.selectedServer = server
  }

  @action setServerFilter = (filter: string): void => {
    this.serverFilter = filter
  }

  @action setServerMenuShown = (shown: boolean): void => {
    this.serverMenuShown = shown
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

  @action setEditServerNameDialogShown = (shown: boolean): void => {
    this.editServerNameDialogShown = shown
  }

  @action setEditServerDescriptionDialogShown = (shown: boolean): void => {
    this.editServerDescriptionDialogShown = shown
  }

  @action setManageServerExtraInjectDialogShown = (shown: boolean): void => {
    this.manageServerExtraInjectDialogShown = shown
  }

  @action setConnectDialogShown = (shown: boolean): void => {
    this.connectDialogShown = shown
  }

  @action addServer = (server: Server): void => {
    this.servers.push(server)

    this.setSelectedServer(ExArray.getLast(this.servers))
  }

  @action deleteServer = (server: Server): void => {
    this.servers.remove(server)

    if (this.isSelectedServer(server)) {
      this.setSelectedServer(this.servers[0])
    }
  }

  @action setServerNickname = (server: Server, nickname: string): void => {
    server.nickname = nickname
  }

  @action setServerAddress = (server: Server, host: string, port: number): void => {
    server.host = host
    server.port = port
  }

  @action setServerName = (server: Server, name: string): void => {
    server.name = name
  }

  @action setServerDescription = (server: Server, description: string): void => {
    server.description = description
  }

  @action setServerExtraInject = (server: Server, extraInject: Pair<string>[]): void => {
    server.extraInject = extraInject
  }

  @action setServerPing = (server: Server, ping: number): void => {
    server.ping = ping
  }

  @action setServerInfo = (server: Server, info: ServerInfo): void => {
    Object.keys(info).forEach((key) => (server[key] = info[key]))
  }

  @action setServerPassword = (server: Server, password: string): void => {
    server.password = password
  }

  @action sortServersByHostname = (direction: boolean): void => {
    this.servers.replace(
      this.servers.sort((first, second) =>
        this.calculateSortingPriority(
          direction,
          first.name || first.hostname,
          second.name || second.hostname
        )
      )
    )
  }

  @action sortServersByField = (field: keyof SortableFields, direction: boolean): void => {
    this.servers.replace(
      this.servers.sort((first: Server, second: Server) =>
        this.calculateSortingPriority(direction, first[field], second[field])
      )
    )
  }

  getServers = (): Server[] => {
    return this.servers
  }

  getFilteredServers = (): Server[] => {
    return this.filteredServers
  }

  getSelectedServer = (): Server | undefined => {
    return this.selectedServer
  }

  getServerAddress = ({ host, port }: Server): string => {
    return `${host}:${port}`
  }

  filterServersByName = (): Server[] => {
    return this.servers.filter(({ name, hostname }) =>
      ExString.contains(name || hostname!, this.serverFilter)
    )
  }

  isSelectedServer = (server: Server): boolean => {
    return this.selectedServer === server
  }

  private calculateSortingPriority = (
    direction: boolean,
    firstValue?: string | number,
    secondValue?: string | number
  ): number => {
    if (firstValue === undefined) {
      return 1
    }

    if (secondValue === undefined) {
      return -1
    }

    if (firstValue! > secondValue!) {
      return direction ? 1 : -1
    }

    if (firstValue! < secondValue!) {
      return direction ? -1 : 1
    }

    return 0
  }
}

export const serverStore = new ServerStore()

export const {
  setServers,
  setSelectedServer,
  addServer,
  deleteServer,
  setServerAddress,
  setServerName,
  setServerDescription,
  setServerExtraInject,
  setServerPing,
  setServerInfo,
  setServerPassword,
  getServers,
  getFilteredServers,
  getSelectedServer,
  getServerAddress,
  isSelectedServer
} = serverStore
