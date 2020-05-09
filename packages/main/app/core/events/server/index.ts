import { EventManager } from '@app/libs/event-manager'
import { Models } from '@app/core/models'

EventManager.add('SERVER_ADD', async ({ host, port, groupId }) => {
  const group = await Models.Group.getById(groupId)

  const server = await Models.Server.add(host, port, group!)

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
  await Models.Server.setAddress(serverId, host, port)
})
