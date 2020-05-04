import { app, BrowserWindow } from 'electron'

import './core/events'

export const windowWidth = 1152
export const windowHeight = 720
export const pathTemplate = './dist/index.html'

let mainWindow: BrowserWindow | null

app.on('ready', async () => {
  await createWindow()
  await setupWindow()
  setEventHooks()
})

app.allowRendererProcessReuse = true

async function createWindow(): Promise<void> {
  mainWindow = new BrowserWindow({
    width: windowWidth,
    height: windowHeight,
    frame: false,
    maximizable: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      devTools: DEVELOPMENT
    }
  })
}

async function setupWindow(): Promise<void> {
  if (DEVELOPMENT) {
    await mainWindow!.loadURL('http://localhost:4040/')
    mainWindow!.webContents.openDevTools()
  } else {
    await mainWindow!.loadFile(pathTemplate)
  }
}

function setEventHooks(): void {
  mainWindow!.on('closed', () => {
    mainWindow = null
  })
}
