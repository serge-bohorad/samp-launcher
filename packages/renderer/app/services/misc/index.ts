import { SystemDialogType } from '@shared/types/misc'
import { ShowSystemDialogOptions } from './types'

export function minimizeWindow(): void {
  invokeMainUnilaterally('WINDOW_MINIMIZE')
}

export function closeWindow(): void {
  invokeMainUnilaterally('WINDOW_CLOSE')
}

export function copyToClipboard(data: string | number): void {
  invokeMainUnilaterally('COPY_TO_CLIPBOARD', data)
}

export async function showSystemDialog(
  type: SystemDialogType,
  options?: ShowSystemDialogOptions
): Promise<void | string[]> {
  const [paths] = await invokeMain('SHOW_SYSTEM_DIALOG', { type, ...options })

  return paths!
}
