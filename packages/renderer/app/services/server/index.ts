import { Server } from '@shared/types/entities'

import { errorAddressEmpty, defaultPort } from './data'
import { settingsStore } from '@app/stores/settings'
import { miscStore } from '@app/stores/misc'

import { getSelectedGroup } from '@app/stores/group'
import {
  addServer,
  getSelectedServer,
  deleteServer,
  getServerAddress,
  setServerAddress,
  setServerName,
  setServerDescription,
  setServerExtraInject,
  setServerPing,
  setServerInfo,
  getFilteredServers,
  setServerPassword
} from '@app/stores/server'
import { copyToClipboard } from '../misc'

export async function onAddServer(
  serverAddress: string,
  targetGroup = getSelectedGroup()
): Promise<string | void> {
  if (!serverAddress) {
    return errorAddressEmpty
  }

  const [host, port] = splitServerAddress(serverAddress)

  const [newServer, error] = await invokeMain('SERVER_ADD', {
    host,
    port,
    groupId: targetGroup!.id
  })

  if (error) {
    return error
  }

  addServer(newServer!)
}

export function onDeleteServer(targetServer = getSelectedServer()): void {
  if (!targetServer) {
    return
  }

  invokeMainUnilaterally('SERVER_DELETE', targetServer.id)

  deleteServer(targetServer)
}

export function onCopyServerInfo(targetServer = getSelectedServer()): void {
  if (!targetServer) {
    return
  }

  const serverInfo = generateServerInfo(targetServer)

  copyToClipboard(serverInfo)
}

export async function onCloneServer(targetServer = getSelectedServer()): Promise<void> {
  if (!targetServer) {
    return
  }

  const [newServer] = await invokeMain('SERVER_CLONE', targetServer.id)

  setServerExtraInject(newServer!, Pair.from(newServer!.extraInject as string[]))

  addServer(newServer!)
}

export function onSaveServerNickname(
  newNickname: string,
  targetServer = getSelectedServer()
): void {
  if (!targetServer) {
    return
  }

  invokeMainUnilaterally('SERVER_UPDATE_NICKNAME', {
    serverId: targetServer.id,
    nickname: newNickname
  })
}

export async function onSaveServerAddress(
  newAddress: string,
  targetServer = getSelectedServer()
): Promise<string | void> {
  if (!targetServer || getServerAddress(targetServer) === newAddress) {
    return
  }

  if (!newAddress) {
    return errorAddressEmpty
  }

  const [host, port] = splitServerAddress(newAddress)

  const [, error] = await invokeMain('SERVER_UPDATE_ADDRESS', {
    serverId: targetServer.id,
    host,
    port
  })

  if (error) {
    return error
  }

  setServerAddress(targetServer, host, port)
}

export function onSaveServerName(
  newName: string,
  targetServer = getSelectedServer()
): string | void {
  if (!targetServer || targetServer.name === newName) {
    return
  }

  invokeMainUnilaterally('SERVER_UPDATE_NAME', { serverId: targetServer.id, name: newName })

  setServerName(targetServer, newName)
}

export function onSaveServerDescription(
  newDescription: string,
  targetServer = getSelectedServer()
): string | void {
  if (!targetServer || targetServer.description === newDescription) {
    return
  }

  invokeMainUnilaterally('SERVER_UPDATE_DESCRIPTION', {
    serverId: targetServer.id,
    description: newDescription
  })

  setServerDescription(targetServer, newDescription)
}

export function onSaveServerExtraInject(
  newExtraInject: Pair<string>[],
  targetServer = getSelectedServer()
): void {
  if (!targetServer) {
    return
  }

  invokeMainUnilaterally('SERVER_UPDATE_EXTRA_INJECT', {
    serverId: targetServer.id,
    extraInject: Pair.values(newExtraInject)
  })

  setServerExtraInject(targetServer, newExtraInject)
}

export async function onRefreshServer(targetServer = getSelectedServer()): Promise<void> {
  if (!targetServer) {
    return
  }

  const { host, port } = targetServer

  const [ping] = await invokeMain('SERVER_GET_PING', { host, port })

  if (ping) {
    setServerPing(targetServer, ping)
  }

  const [info] = await invokeMain('SERVER_GET_INFO', {
    host,
    port
  })

  if (info) {
    setServerInfo(targetServer, info)
  }
}

export function onRefreshSeveralServers(targetServers = getFilteredServers()): Promise<void[]> {
  return Promise.all(targetServers.map((server) => onRefreshServer(server)))
}

export function onSaveServerPassword(
  newPassword: string,
  targetServer = getSelectedServer()
): void {
  if (!targetServer || targetServer.password === newPassword) {
    return
  }

  invokeMainUnilaterally('SERVER_UPDATE_PASSWORD', {
    serverId: targetServer.id,
    password: newPassword
  })

  setServerPassword(targetServer, newPassword)
}

export async function onConnectToServer(
  targetServer = getSelectedServer()
): Promise<string | void> {
  if (!targetServer) {
    return
  }

  const { usingCommonNickname } = miscStore
  const { commonNickname, commonExtraInject, gameDirectory } = settingsStore
  const {
    host,
    port,
    nickname: serverNickname,
    password,
    extraInject: serverExtraInject
  } = targetServer
  const nickname = usingCommonNickname ? commonNickname : serverNickname

  const extraInject = serverExtraInject.length ? serverExtraInject : commonExtraInject
  const finalExtraInject = Pair.values(extraInject as Pair<string>[])

  const [, error] = await invokeMain('GAME_RUN', {
    host,
    port,
    nickname,
    password,
    extraInject: finalExtraInject,
    gameDirectory
  })

  return error!
}

function splitServerAddress(address: string): [string, number] {
  const [host, rawPort] = address.trim().split(':')
  const port = Number(rawPort) || defaultPort

  return [host, port]
}

function generateServerInfo(targetServer: Server): string {
  const {
    name,
    hostname,
    host,
    port,
    players,
    maxPlayers,
    ping,
    mode,
    language,
    mapname,
    weburl,
    version
  } = targetServer

  return [
    `Hostname: ${name || hostname || '-'}`,
    `Address: ${host}:${port}`,
    `Players: ${players || 0} / ${maxPlayers || 0}`,
    `Ping: ${ping || 0}`,
    `Mode: ${mode || '-'}`,
    `Language: ${language || '-'}`,
    `Map: ${mapname || '-'}`,
    `Web-site: ${weburl || '-'}`,
    `Version: ${version || '-'}`
  ].join('\n')
}
