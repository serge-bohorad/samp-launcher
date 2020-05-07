import { Server } from '@shared/types/entities'

import { errorAddressEmpty, defaultPort } from './data'

import { getSelectedGroup } from '@app/stores/group'
import { addServer, getSelectedServer, deleteServer, setServerAddress } from '@app/stores/server'
import { copyToClipboard } from '../misc'

export async function onAddServer(
  serverAddress: string,
  targetGroup = getSelectedGroup()
): Promise<string | void> {
  if (!serverAddress) {
    return errorAddressEmpty
  }

  const [host, port] = splitServerAddress(serverAddress)

  const [newServer] = await invokeMain('SERVER_ADD', { host, port, groupId: targetGroup!.id })

  addServer(newServer!)

  // TODO: refresh server
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

  addServer(newServer!)

  // TODO: Process extra inject

  // TODO: refresh server
}

export function onSaveServerAddress(
  newServerAddress: string,
  targetServer = getSelectedServer()
): string | void {
  if (!targetServer || compareServerAddress(targetServer, newServerAddress)) {
    return
  }

  if (!newServerAddress) {
    return errorAddressEmpty
  }

  const [host, port] = splitServerAddress(newServerAddress)

  invokeMainUnilaterally('SERVER_UPDATE_ADDRESS', { host, port, serverId: targetServer.id })

  setServerAddress(targetServer, host, port)
}

function splitServerAddress(serverAddress: string): [string, number] {
  const [host, rawPort] = serverAddress.split(':')
  const port = Number(rawPort) || defaultPort

  return [host, port]
}

export function generateServerInfo(targetServer: Server): string {
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
    map,
    weburl,
    version
  } = targetServer

  const info = [
    `Hostname: ${name || hostname || '-'}`,
    `Address: ${host}:${port}`,
    `Players: ${players || 0} / ${maxPlayers || 0}`,
    `Ping: ${ping || 0}`,
    `Mode: ${mode || '-'}`,
    `Language: ${language || '-'}`,
    `Map: ${map || '-'}`,
    `Web-site: ${weburl || '-'}`,
    `Version: ${version || '-'}`
  ]

  return info.join('\n')
}

function compareServerAddress({ host, port }: Server, address: string): boolean {
  return `${host}:${port}`.equal(address)
}
