import { EventManager } from '@app/libs/event-manager'
import { Models } from '@app/core/models'

EventManager.add('SETTINGS_FETCH', async () => {
  const settings = await Models.Settings.getAll()

  const finalSettings = {
    ...settings,
    commonNickname: settings.nickname,
    commonExtraInject: settings.extraInject
  }

  delete finalSettings.id
  delete finalSettings.nickname
  delete finalSettings.extraInject

  return [finalSettings, null]
})

EventManager.add('SETTINGS_UPDATE_NICKNAME', async (nickname) => {
  await Models.Settings.setNickname(nickname)
})

EventManager.add('SETTINGS_UPDATE_GAME_DIRECTORY', async (gameDirectory) => {
  await Models.Settings.setGameDirectory(gameDirectory)
})

EventManager.add('SETTINGS_UPDATE_AUTO_SWITCH_NICKNAME', async (state) => {
  await Models.Settings.setAutoSwitchNickname(state)
})

EventManager.add('SETTINGS_UPDATE_DELETION_CONFIRM', async (state) => {
  await Models.Settings.setDeletionConfirm(state)
})

EventManager.add('SETTINGS_UPDATE_SERVER_REFRESH_DELAY', async (delay) => {
  await Models.Settings.setServerRefreshDelay(delay)
})

EventManager.add('SETTINGS_UPDATE_REFRESH_ALL_SERVERS', async (state) => {
  await Models.Settings.setRefreshAllServers(state)
})

EventManager.add('SETTINGS_UPDATE_EXTRA_INJECT', async (extraInject) => {
  await Models.Settings.setExtraInject(extraInject)
})
