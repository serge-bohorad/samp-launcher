export function minimizeWindow(): void {
  invokeMainSimply('WINDOW_MINIMIZE')
}

export function closeWindow(): void {
  invokeMainSimply('WINDOW_CLOSE')
}
