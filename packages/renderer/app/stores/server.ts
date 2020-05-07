import { observable, action } from 'mobx'

import { Server } from '@shared/types/entities'

export class ServerStore {
  readonly servers = observable<Server>([])
  @observable selectedServer: Server | undefined

  @action setServers = (servers: Server[]): void => {
    this.servers.replace(servers)
  }

  @action setSelectedServer = (server?: Server): void => {
    this.selectedServer = server
  }
}

export const serverStore = new ServerStore()

export const { setServers, setSelectedServer } = serverStore
