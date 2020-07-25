import { DeleteResult, UpdateResult } from 'typeorm'

import { Server as EntityServer, Group } from '@app/database/entities'

import { Repositories } from '@app/core/repositories'

export namespace Server {
  export async function add(host: string, port: number, group: Group): Promise<EntityServer> {
    const server = Repositories.Server.create(host, port, group)

    await Repositories.Server.insert(server)

    return server
  }

  export function deleteById(id: number): Promise<DeleteResult> {
    return Repositories.Server.deleteById(id)
  }

  export async function clone(id: number): Promise<EntityServer> {
    const targetServer = await Repositories.Server.getById(id)

    const newServer = { ...targetServer!, id: undefined! }

    await Repositories.Server.insert(newServer)

    return newServer
  }

  export function setNickname(id: number, nickname: string): Promise<UpdateResult> {
    return Repositories.Server.setNickname(id, nickname)
  }

  export function setAddress(id: number, host: string, port: number): Promise<UpdateResult> {
    return Repositories.Server.setAddress(id, host, port)
  }

  export function setName(id: number, name: string): Promise<UpdateResult> {
    return Repositories.Server.setName(id, name)
  }

  export function setDescription(id: number, description: string): Promise<UpdateResult> {
    return Repositories.Server.setDescription(id, description)
  }

  export function setExtraInject(id: number, extraInject: string[]): Promise<UpdateResult> {
    return Repositories.Server.setExtraInject(id, extraInject)
  }

  export function setPassword(id: number, password: string): Promise<UpdateResult> {
    return Repositories.Server.setPassword(id, password)
  }
}
