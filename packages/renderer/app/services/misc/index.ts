export function minimizeWindow(): void {
  invokeMainUnilaterally('WINDOW_MINIMIZE')
}

export function closeWindow(): void {
  invokeMainUnilaterally('WINDOW_CLOSE')
}

export function copyToClipboard(data: string | number): void {
  invokeMainUnilaterally('COPY_TO_CLIPBOARD', data)
}
