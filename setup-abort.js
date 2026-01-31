import { getFriendMessagesApi, getTextChannelMessagesApi } from "./apis/chat-service-apis.js";
import { CHAT_CHANNEL, VOICE_CHANNEL } from "./config.js";
import { getMeetingsOfVideoChannelApi } from "./apis/meeting-service-apis.js";
import { getJoinedTeamsApi } from "./apis/team-service.apis.js";
import { getFriendsApi, getUserInfoApi } from "./apis/user-service-apis.js";

export function setup() {
  const userRes = getUserInfoApi();
  const user = JSON.parse(userRes.body)

  const teamsRes = getJoinedTeamsApi(0, 100)
  const teams = JSON.parse(teamsRes.body).data
  
  const friendsRes = getFriendsApi(0, 100)
  const friends = JSON.parse(friendsRes.body).data

  const messages = []
  for(var team of teams){
    const chatChannels = team.channels.filter(channel => channel.type === CHAT_CHANNEL)
    for(var chatChannel of chatChannels){
        const res = getTextChannelMessagesApi(0, chatChannel.id)
        if (res.status !== 200) {
          throw Error(`Error: getTextChannelMessagesApi failed. Status: ${res.status}, Channel: ${chatChannel.id}`);
        }
        const addedMessages = JSON.parse(res.body)
        messages.push(...addedMessages)
    }
  }
  for(var friend of friends){
    const res = getFriendMessagesApi(0, friend.id)
    if (res.status !== 200) {
          throw Error(`Error: getFriendMessagesApi failed. Status: ${res.status}, Friend: ${friend.id}`);
    }
    const addedMessages = JSON.parse(res.body)
    messages.push(...addedMessages)
  }

  const meetings = []
  for(var team of teams){
    const voiceChannels = team.channels.filter(channel => channel.type === VOICE_CHANNEL)
    for(var voiceChannel of voiceChannels){
        const res = getMeetingsOfVideoChannelApi(0, voiceChannel.id)
        if(res.status != 200){
          throw Error(`Warning: getMeetingsOfVideoChannelApi failed. Status: ${res.status}, Channel: ${voiceChannel.id}`);
        }
        const addedMeetings = JSON.parse(res.body)
        meetings.push(...addedMeetings)
    }
  }

  const result = {user, teams, friends, messages, meetings}

  return result
}

export default function () {
  // do nothing
}

export function handleSummary(data) {
  return {
    'setup-data.json': JSON.stringify(data.setup_data)
  };
}