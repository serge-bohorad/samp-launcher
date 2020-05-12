import { EventManager } from '@app/libs/event-manager'
import { Service } from '@app/core/services'
import { Models } from '@app/core/models'

EventManager.add('SERVER_ADD', async ({ host, port, groupId }) => {
  const [ip, error] = await Service.Server.getIpByHostname(host)

  if (error) {
    return [null, error]
  }

  const group = await Models.Group.getById(groupId)
  const server = await Models.Server.add(ip!, port, group!)

  return [server, null]
})

EventManager.add('SERVER_DELETE', async (serverId) => {
  await Models.Server.deleteById(serverId)
})

EventManager.add('SERVER_CLONE', async (serverId) => {
  const newServer = await Models.Server.clone(serverId)

  return [newServer, null]
})

EventManager.add('SERVER_UPDATE_NICKNAME', async ({ serverId, nickname }) => {
  await Models.Server.setNickname(serverId, nickname)
})

EventManager.add('SERVER_UPDATE_ADDRESS', async ({ serverId, host, port }) => {
  const [ip, error] = await Service.Server.getIpByHostname(host)

  if (error) {
    return [null, error]
  }

  await Models.Server.setAddress(serverId, ip!, port)
})

EventManager.add('SERVER_UPDATE_NAME', async ({ serverId, name }) => {
  await Models.Server.setName(serverId, name)
})

EventManager.add('SERVER_UPDATE_DESCRIPTION', async ({ serverId, description }) => {
  await Models.Server.setDescription(serverId, description)
})

EventManager.add('SERVER_UPDATE_EXTRA_INJECT', async ({ serverId, extraInject }) => {
  await Models.Server.setExtraInject(serverId, extraInject)
})

EventManager.add('SERVER_GET_PING', async ({ host, port }) => {
  const ping = await Service.Server.getPing(host, port)

  return [ping || null, null]
})

EventManager.add('SERVER_GET_INFO', async ({ host, port }) => {
  const info = await Service.Server.getInfo(host, port)

  return [info || null, null]
})

EventManager.add('SERVER_UPDATE_PASSWORD', async ({ serverId, password }) => {
  await Models.Server.setPassword(serverId, password)
})
