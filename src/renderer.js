const displayName = document.getElementById('name')
const errorText = document.getElementById('error')

window.electronAPI.onPlayerName((_event, value) => {
  displayName.innerText = value.toString()
})

window.electronAPI.onError((_event, value) => {
  errorText.innerText = value.toString()
})