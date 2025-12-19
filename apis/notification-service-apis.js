import { headerConfig, NOTIFICATION_SERVICE_API } from "../config.js";
import http from 'k6/http';

export function anomalyAddToCalendarApi(meetingId, isAdded) {
  return http.post(
    `${NOTIFICATION_SERVICE_API}/anomaly/calendar/${meetingId}?isAdded=${isAdded}`,
    { headers: headerConfig }
  )
}

export function anomalyGetFriendMessagesApi(friendId, receivedMessageNum) {
  return http.get(
    `${NOTIFICATION_SERVICE_API}/anomaly/message/friend/${friendId}?receivedMessageNum=${receivedMessageNum}`, 
    { headers: headerConfig }
  )
}

export function anomalyGetEmailApi() {
  return http.get(
    `${NOTIFICATION_SERVICE_API}/anomaly/user/private/email`, 
    { headers: headerConfig }
  )
}

export function anomalyGetJoinedTeamsApi(pageNo, pageSize) {
  return http.get(
    `${NOTIFICATION_SERVICE_API}/anomaly/team?pageNo=${pageNo}&pageSize=${pageSize}`, 
    { headers: headerConfig }
  )
}