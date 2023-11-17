// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts


const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  onPlayerName: (playerName) => ipcRenderer.on('playerName', playerName),
  onError: (error) => ipcRenderer.on('error', error),
})
