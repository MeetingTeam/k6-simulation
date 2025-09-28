export const USER_SERVICE_API = "http://192.168.153.129:30080/user-service"
export const TEAM_SERVICE_API = "http://192.168.153.129:30080/team-service"
export const MEETING_SERVICE_API = "http://192.168.153.129:30080/meeting-service"
export const CHAT_SERVICE_API = "http://192.168.153.129:30080/chat-service"
export const NOTIFICATION_SERVICE_API = "http://192.168.153.129:30080/notification-service"
export const WEBSOCKET_SERVICE_API = "ws://192.168.153.129:30080/websocket-service"
// export const USER_SERVICE_API = "http://localhost:8080/user-service"
// export const TEAM_SERVICE_API = "http://localhost:8081/team-service"
// export const MEETING_SERVICE_API = "http://localhost:8083/meeting-service"
// export const CHAT_SERVICE_API = "http://localhost:8082/chat-service"
// export const NOTIFICATION_SERVICE_API = "http://localhost:8086/chat-service"
// export const WEBSOCKET_SERVICE_API = "ws://localhost:8084/websocket-service"

export const accessToken = "eyJraWQiOiIwSXY2eWJoNk9TbW16WkprajZcL1UzUlFLM3ZFUXc1ZkRJRGhjZFpta0ViUT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhNGU4MDRjOC02MGExLTcwMjEtMjFlZS0zOTNmZGZiZTI0OTIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfeTMwZWlKeWpmIiwiY29nbml0bzp1c2VybmFtZSI6ImE0ZTgwNGM4LTYwYTEtNzAyMS0yMWVlLTM5M2ZkZmJlMjQ5MiIsIm9yaWdpbl9qdGkiOiI2NTFlZGVjNy0yZWJlLTQyY2ItOWMyMi1mZTQzZTJlZjhkNTciLCJhdWQiOiI0dTIyYTM4NDRoM205M3EwcTZiODdtNGlkbCIsImV2ZW50X2lkIjoiMTYwM2Y5NGEtOWNhMi00NjFkLTkxMDYtNDI2ZDhlZGI0OTEwIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE3NTg5ODA0ODIsImV4cCI6MTc1OTA2Njc3MiwiaWF0IjoxNzU5MDYzMTcyLCJqdGkiOiJmNjZkODY3Zi02MWFiLTQ0YzctYTFhNS01NzRiMDczZmZhZjAiLCJlbWFpbCI6IjIyNTIwNTI3QGdtLnVpdC5lZHUudm4ifQ.NcEXZ_2lE-9mfvZAb3sJDzJu4GJBiItz-bRQC7YXdkV0BHpW-MxcBGHnNiKsPE10vYcdBRg7SAJ5c8mX4pryGVgBzHO62MguYwtVrLrPKCb9OvJv78nKvO8CZ9gE7B9OJfFNFSTa940Pc_cK11iOnxE6kyE4DxLTQj3f5IBNI7dU3MuP0A_60LdyWiuBU5WfxFW1HpAGA8Pkf_WM1ETf1xvNg3mpyjMg7iEaO2tj1IYwsngAaYoYINagl_09ub8pHX28VYKz6mDVE-Yc68oidcoUss1Fhv1fOFbUcu8Jzo5nrIHfoN_9o7NrZP9nZ1NIRQSkwbIf12xz6X05xknN4g"
export const headerConfig = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${accessToken}`
}

export const CHAT_CHANNEL = "CHAT_CHANNEL"
export const VOICE_CHANNEL = "VOICE_CHANNEL"