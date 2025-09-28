import { randomString } from "../utils.js";
import { CHAT_SERVICE_API, headerConfig } from "./constants.js";
import http from 'k6/http';

export function sendTextMessageApi(teamId, channelId, recipientId) {
  return http.post(
    `${CHAT_SERVICE_API}/message/text_message`,
    JSON.stringify({
      teamId: teamId,
      channelId: channelId,
      recipientId: recipientId,
      content: randomString(20)
    }),
    { headers: headerConfig }
  );
}

export function reactMessageApi(messageId) {
  return http.put(
    `${CHAT_SERVICE_API}/message/reaction`,
    JSON.stringify({
      messageId: messageId,
      emojiCode: "❤️"
    }),
    { headers: headerConfig }
  );
}

export function unsendMessageApi(messageId) {
  return http.put(
    `${CHAT_SERVICE_API}/message/unsend/${messageId}`,
    null, // no body
    { headers: headerConfig }
  );
}

export function getFriendMessagesApi(receivedMessageNum, friendId) {
  return http.get(
    `${CHAT_SERVICE_API}/message/friend/${friendId}?receivedMessageNum=${receivedMessageNum}`,
    { headers: headerConfig }
  );
}

export function getTextChannelMessagesApi(receivedMessageNum, channelId) {
  return http.get(
    `${CHAT_SERVICE_API}/message/text_channel/${channelId}?receivedMessageNum=${receivedMessageNum}`,
    { headers: headerConfig }
  );
}

