import { BrowserWindow } from 'electron'

export namespace Misc {
  export function minimizeWindow(): void {
    BrowserWindow.getFocusedWindow()!.minimize()
  }

  export function closeWindow(): void {
    BrowserWindow.getFocusedWindow()!.close()
  }
}
