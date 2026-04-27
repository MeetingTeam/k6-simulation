const API_HOST_PORT="localhost:30080"
export const USER_SERVICE_API = `http://${API_HOST_PORT}/user-service`
export const TEAM_SERVICE_API = `http://${API_HOST_PORT}/team-service`
export const MEETING_SERVICE_API = `http://${API_HOST_PORT}/meeting-service`
export const CHAT_SERVICE_API = `http://${API_HOST_PORT}/chat-service`
export const NOTIFICATION_SERVICE_API = `http://${API_HOST_PORT}/chat-service`
export const WEBSOCKET_SERVICE_API = `ws://${API_HOST_PORT}/websocket-service`
export const FRONTEND_SERVICE_API = `http://${API_HOST_PORT}`

export const accessToken = ""
export const headerConfig = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${accessToken}`
}

export const CHAT_CHANNEL = "CHAT_CHANNEL"
export const VOICE_CHANNEL = "VOICE_CHANNEL"