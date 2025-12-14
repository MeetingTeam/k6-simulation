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

export const accessToken = "eyJraWQiOiIwSXY2eWJoNk9TbW16WkprajZcL1UzUlFLM3ZFUXc1ZkRJRGhjZFpta0ViUT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI5NGY4ZjQ5OC0zMDcxLTcwMGItMDM2Yi04YjY0ZmM1MmE3MTYiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfeTMwZWlKeWpmIiwiY29nbml0bzp1c2VybmFtZSI6Ijk0ZjhmNDk4LTMwNzEtNzAwYi0wMzZiLThiNjRmYzUyYTcxNiIsIm9yaWdpbl9qdGkiOiIyZGFlOGFmNS05ZDJlLTQ3MzUtOWY0Mi0yZjc5YmE5MzdjNmQiLCJhdWQiOiI0dTIyYTM4NDRoM205M3EwcTZiODdtNGlkbCIsImV2ZW50X2lkIjoiMDlkZWJiMTktZmI4My00NmEyLTk4NzItMjdmZmZiYTUwN2Y3IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE3NjU2ODI0NjAsImV4cCI6MTc2NTY4NjA2MCwiaWF0IjoxNzY1NjgyNDYwLCJqdGkiOiI2MTdjZTdmYS0wMGQxLTQ0OTItYjQ5MS0xM2M3YmQ2MmQxZmQiLCJlbWFpbCI6InRpZW5odW5nMTcwOTIwMDRAZ21haWwuY29tIn0.GWjYMnInRt0UyBCJbh3cLITNENrUosb01s_iH6PgdzFHGYOpota1r7eCKtuuFv08NUDTvKX4SF7zIGAfwYUy5FCTpSS2cw7GbojDxzuYbqmJnjOFw5hG_LAsPc4gquOc31dL0D-4ELJ0iDjj7r4Byz6NzkR_OyA16S9gGaID3hEPogAuasRQX6nSDu-GVHU75ZnxSEw3--p5_8HUbpIr-C9060d4HXDvixENraJYUc0SPZrvDCPgVCJrTvOaWami2FGvT2LfCVJDCpo1YA6djE2ClhZ0FgoXsSzPZuE55RCRRtx-tL46SyivM191H--GpeDDoZtQJDTitIcfeFdHxA"
export const headerConfig = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${accessToken}`
}

export const CHAT_CHANNEL = "CHAT_CHANNEL"
export const VOICE_CHANNEL = "VOICE_CHANNEL"