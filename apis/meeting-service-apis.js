import { randomBool, randomString } from "../utils.js";
import { headerConfig, MEETING_SERVICE_API } from "../config.js";
import http from 'k6/http';

export function createMeetingApi(teamId, channelId) {
  return http.post(
    `${MEETING_SERVICE_API}/meeting`,
    JSON.stringify({
      title: "Meeting Now",
      teamId: teamId,
      channelId: channelId,
      scheduledTime: "14:45:00",
      startDate: new Date(),
      endDate: null,
      scheduledDaysOfWeek: [2,4,6]
    }),
    { headers: headerConfig }
  );
}

export function updateMeetingApi(meetingId) {
  return http.patch(
    `${MEETING_SERVICE_API}/meeting`,
    JSON.stringify({
      id: meetingId,
      title: randomString(8),
      scheduledTime: "14:45:00",
      startDate: new Date(),
      endDate: null,
      scheduledDaysOfWeek: [3,4,5]
    }),
    { headers: headerConfig }
  );
}

export function reactMeetingApi(meetingId) {
  return http.post(
    `${MEETING_SERVICE_API}/meeting/reaction/${meetingId}`,
    JSON.stringify({ 
      emojiCode: "❤️" 
    }),
    { headers: headerConfig }
  );
}

export function cancelMeetingApi(meetingId) {
  return http.put(
    `${MEETING_SERVICE_API}/meeting/cancel/${meetingId}?isCanceled=${randomBool().toString()}`,
    null,
    { headers: headerConfig }
  );
}

export function getMeetingsOfVideoChannelApi(receivedMeetingNum, channelId) {
  return http.get(
    `${MEETING_SERVICE_API}/meeting?channelId=${channelId}&receivedMeetingNum=${receivedMeetingNum}`,
    { headers: headerConfig }
  );
}

export function deleteMeetingApi(meetingId) {
  return http.del(
    `${MEETING_SERVICE_API}/meeting/${meetingId}`,
    null,
    { headers: headerConfig }
  );
}

export function addToCalendarApi(meetingId) {
  return http.post(
    `${MEETING_SERVICE_API}/calendar/${meetingId}`,
    JSON.stringify({ 
      isAdded: randomBool().toString()
    }),
    { headers: headerConfig }
  );
}

export function getMeetingsOfWeekApi(week) {
  return http.get(
    `${MEETING_SERVICE_API}/calendar/week/${week}`,
    { headers: headerConfig }
  );
}
