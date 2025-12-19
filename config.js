export const USER_SERVICE_API = "http://localhost:8080/user-service"
export const TEAM_SERVICE_API = "http://localhost:8081/team-service"
export const MEETING_SERVICE_API = "http://localhost:8083/meeting-service"
export const CHAT_SERVICE_API = "http://localhost:8082/chat-service"
export const NOTIFICATION_SERVICE_API = "http://localhost:8086/chat-service"
export const WEBSOCKET_SERVICE_API = "ws://localhost:8084/websocket-service"

export const accessToken = ""
export const headerConfig = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${accessToken}`
}

export const CHAT_CHANNEL = "CHAT_CHANNEL"
export const VOICE_CHANNEL = "VOICE_CHANNEL"