export function minimizeWindow(): void {
  invokeMainUnilaterally('WINDOW_MINIMIZE')
}

export function closeWindow(): void {
  invokeMainUnilaterally('WINDOW_CLOSE')
}
