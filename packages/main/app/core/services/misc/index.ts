import { BrowserWindow, clipboard } from 'electron'

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
}
