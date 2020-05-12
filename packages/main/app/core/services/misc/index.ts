import { BrowserWindow, FileFilter, clipboard, app, dialog, shell } from 'electron'

import { SystemDialogType } from '@shared/types/misc'

export namespace Misc {
  export function minimizeWindow(): void {
    BrowserWindow.getFocusedWindow()!.minimize()
  }

  export function closeWindow(): void {
    BrowserWindow.getFocusedWindow()!.close()
  }

  export function copyToClipboard(data: string | number): void {
    clipboard.write({ text: String(data) })
  }

  export async function showSystemDialog(
    type: SystemDialogType,
    defaultPath?: string,
    filters?: FileFilter[]
  ): Promise<void | string[]> {
    const { canceled, filePaths } = await dialog.showOpenDialog({
      properties: [type, 'showHiddenFiles', 'multiSelections'],
      defaultPath: defaultPath || app.getPath('desktop'),
      filters
    })

    if (canceled) {
      return
    }

    return filePaths
  }

  export function openLink(link): Promise<void> {
    return shell.openExternal(`http://${link}`)
  }
}
