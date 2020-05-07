import { EventManager } from '@app/libs/event-manager'
import { Models } from '@app/core/models'

EventManager.add('GROUP_FETCH', async () => {
  const groups = await Models.Group.getAll()

  return [groups, null]
})

EventManager.add('GROUP_CREATE', async (groupName) => {
  await Models.Group.unsetSelected()

  const group = await Models.Group.add(groupName)

  group.servers = []

  return [group, null]
})

EventManager.add('GROUP_DELETE', async (groupId) => {
  await Models.Group.deleteById(groupId)
})

EventManager.add('GROUP_RENAME', async ({ groupId, newGroupName }) => {
  await Models.Group.rename(groupId, newGroupName)
})

EventManager.add('GROUP_SWITCH_SELECTED', async (groupId) => {
  await Models.Group.switchSelected(groupId)
})
