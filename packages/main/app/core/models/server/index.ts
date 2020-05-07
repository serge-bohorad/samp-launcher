import { DeleteResult, UpdateResult } from 'typeorm'

import { Server as EntityServer, Group } from '@app/database/entities'

import { Database } from '@app/core/database'

export namespace Server {
  export async function add(host: string, port: number, group: Group): Promise<EntityServer> {
    const server = Database.Server.create(host, port, group)

    await Database.Server.insert(server)

    return server
  }

  export function deleteById(id: number): Promise<DeleteResult> {
    return Database.Server.deleteById(id)
  }

  export async function clone(id: number): Promise<EntityServer> {
    const targetServer = await Database.Server.getById(id)

    const newServer = { ...targetServer!, id: undefined! }

    await Database.Server.insert(newServer)

    return newServer
  }

  export function setAddress(id: number, host: string, port: number): Promise<UpdateResult> {
    return Database.Server.setAddress(id, host, port)
  }
}
