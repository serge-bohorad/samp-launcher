import { EventManager } from '@app/libs/event-manager'
import { Service } from '@app/core/services'

EventManager.add('WINDOW_MINIMIZE', async () => {
  Service.Misc.minimizeWindow()
})

EventManager.add('WINDOW_CLOSE', async () => {
  Service.Misc.closeWindow()
})

EventManager.add('COPY_TO_CLIPBOARD', async (data) => {
  Service.Misc.copyToClipboard(data)
})
