import { getFriendMessagesApi, getTextChannelMessagesApi, reactMessageApi, sendTextMessageApi, unsendMessageApi } from "./apis/chat-service-apis.js";
import { CHAT_CHANNEL, VOICE_CHANNEL } from "./apis/constants.js";
import { anomalyGetVersionApi, notFoundApi, unauthorizedApi } from "./apis/error-apis.js";
import { cancelMeetingApi, createMeetingApi, getMeetingsOfVideoChannelApi, reactMeetingApi, updateMeetingApi } from "./apis/meeting-service-apis.js";
import { anomalyAddToCalendarApi, anomalyGetEmailApi, anomalyGetFriendMessagesApi, anomalyGetJoinedTeamsApi } from "./apis/notification-service-apis.js";
import { addFriendsToTeamApi, createChannelApi, createTeamApi, getJoinedTeamsApi, getMembersOfTeamApi, updateChannelApi, updateTeamApi } from "./apis/team-service.apis.js";
import { getFriendsApi, getUserInfoApi, updateUserApi } from "./apis/user-service-apis.js";
import { initWsConnectionApi } from "./apis/websocket-service-apis.js";
import { randomBool, randomNumber } from "./utils.js";

const duration = '20s'
const timeUnit = '1s'
export const options = {
  scenarios: {
    browseBehavior: {
      executor: 'constant-arrival-rate',
      rate: 2,
      timeUnit: timeUnit,
      duration: duration,
      preAllocatedVUs: 2,
      maxVUs: 4,
      exec: 'browseBehavior',
    },
    updateUserBehavior: {
      executor: 'constant-arrival-rate',
      rate: 2,
      timeUnit: timeUnit,
      duration: duration,
      preAllocatedVUs: 2,
      maxVUs: 4,
      exec: 'updateUserBehavior',
    },

    createTeamBehavior: {
      executor: 'constant-arrival-rate',
      rate: 2,
      timeUnit: timeUnit,
      duration: duration,
      preAllocatedVUs: 2,
      maxVUs: 4,
      exec: 'createTeamBehavior',
    },
    updateTeamBehavior: {
      executor: 'constant-arrival-rate',
      rate: 2,
      timeUnit: timeUnit,
      duration: duration,
      preAllocatedVUs: 2,
      maxVUs: 4,
      exec: 'updateTeamBehavior',
    },
    createChannelBehavior: {
      executor: 'constant-arrival-rate',
      rate: 2,
      timeUnit: timeUnit,
      duration: duration,
      preAllocatedVUs: 2,
      maxVUs: 4,
      exec: 'createChannelBehavior',
    },
    updateChannelBehavior: {
      executor: 'constant-arrival-rate',
      rate: 2,
      timeUnit: timeUnit,
      duration: duration,
      preAllocatedVUs: 2,
      maxVUs: 4,
      exec: 'updateChannelBehavior',
    },
    addFriendsToTeamBehavior: {
      executor: 'constant-arrival-rate',
      rate: 2,
      timeUnit: timeUnit,
      duration: duration,
      preAllocatedVUs: 2,
      maxVUs: 4,
      exec: 'addFriendsToTeamBehavior',
    },

    chatBehavior: {
      executor: 'constant-arrival-rate',
      rate: 2,
      timeUnit: timeUnit,
      duration: duration,
      preAllocatedVUs: 2,
      maxVUs: 4,
      exec: 'chatBehavior',
    },
    reactMessageBehavior: {
      executor: 'constant-arrival-rate',
      rate: 2,
      timeUnit: timeUnit,
      duration: duration,
      preAllocatedVUs: 2,
      maxVUs: 4,
      exec: 'reactMessageBehavior',
    },
    unsendMessageBehavior: {
      executor: 'constant-arrival-rate',
      rate: 2,
      timeUnit: timeUnit,
      duration: duration,
      preAllocatedVUs: 2,
      maxVUs: 4,
      exec: 'unsendMessageBehavior',
    },
    getTextChannelMessagesBehavior: {
      executor: 'constant-arrival-rate',
      rate: 2,
      timeUnit: timeUnit,
      duration: duration,
      preAllocatedVUs: 2,
      maxVUs: 4,
      exec: 'getTextChannelMessagesBehavior',
    },
    getFriendMessagesBehavior:{
      executor: 'constant-arrival-rate',
      rate: 2,
      timeUnit: timeUnit,
      duration: duration,
      preAllocatedVUs: 2,
      maxVUs: 4,
      exec: 'getFriendMessagesBehavior',
    },

    createMeetingBehavior: {
      executor: 'constant-arrival-rate',
      rate: 2,
      timeUnit: timeUnit,
      duration: duration,
      preAllocatedVUs: 2,
      maxVUs: 4,
      exec: 'createMeetingBehavior',
    },
    updateMeetingBehavior: {
      executor: 'constant-arrival-rate',
      rate: 2,
      timeUnit: timeUnit,
      duration: duration,
      preAllocatedVUs: 2,
      maxVUs: 4,
      exec: 'updateMeetingBehavior',
    },
    reactMeetingBehavior: {
      executor: 'constant-arrival-rate',
      rate: 2,
      timeUnit: timeUnit,
      duration: duration,
      preAllocatedVUs: 2,
      maxVUs: 4,
      exec: 'reactMeetingBehavior',
    },
    cancelMeetingBehavior: {
      executor: 'constant-arrival-rate',
      rate: 2,
      timeUnit: timeUnit,
      duration: duration,
      preAllocatedVUs: 2,
      maxVUs: 4,
      exec: 'cancelMeetingBehavior',
    },
    getMeetingsOfVideoChannelBehavior: {
      executor: 'constant-arrival-rate',
      rate: 2,
      timeUnit: timeUnit,
      duration: duration,
      preAllocatedVUs: 2,
      maxVUs: 4,
      exec: 'getMeetingsOfVideoChannelBehavior',
    },

    initWsConnectionBehavior: {
      executor: 'constant-arrival-rate',
      rate: 2,
      timeUnit: timeUnit,
      duration: duration,
      preAllocatedVUs: 2,
      maxVUs: 4,
      exec: 'initWsConnectionBehavior',
    },

    // Notification Behavior
    // anomalyAddToCalendarBehavior: {
    //   executor: 'constant-arrival-rate',
    //   rate: 2,
    //   timeUnit: timeUnit,
    //   duration: duration,
    //   preAllocatedVUs: 2,
    //   maxVUs: 4,
    //   exec: 'anomalyAddToCalendarBehavior',
    // },
    // anomalyGetFriendMessagesBehavior: {
    //   executor: 'constant-arrival-rate',
    //   rate: 2,
    //   timeUnit: timeUnit,
    //   duration: duration,
    //   preAllocatedVUs: 2,
    //   maxVUs: 4,
    //   exec: 'anomalyGetFriendMessagesBehavior',
    // },
    // anomalyGetEmailBehavior: {
    //   executor: 'constant-arrival-rate',
    //   rate: 2,
    //   timeUnit: timeUnit,
    //   duration: duration,
    //   preAllocatedVUs: 2,
    //   maxVUs: 4,
    //   exec: 'anomalyGetEmailBehavior',
    // },
    // anomalyGetJoinedTeamsBehavior: {
    //   executor: 'constant-arrival-rate',
    //   rate: 2,
    //   timeUnit: timeUnit,
    //   duration: duration,
    //   preAllocatedVUs: 2,
    //   maxVUs: 4,
    //   exec: 'anomalyGetJoinedTeamsBehavior',
    // },

    // // Error Bahaviors
    // anomalyGetVersionBehavior: {
    //   executor: 'constant-arrival-rate',
    //   rate: 2,
    //   timeUnit: timeUnit,
    //   duration: duration,
    //   preAllocatedVUs: 2,
    //   maxVUs: 4,
    //   exec: 'anomalyGetVersionBehavior',
    // },
    // notFoundBehavior: {
    //   executor: 'constant-arrival-rate',
    //   rate: 2,
    //   timeUnit: timeUnit,
    //   duration: duration,
    //   preAllocatedVUs: 2,
    //   maxVUs: 4,
    //   exec: 'notFoundBehavior',
    // },
    // unauthorizedBehavior: {
    //   executor: 'constant-arrival-rate',
    //   rate: 2,
    //   timeUnit: timeUnit,
    //   duration: duration,
    //   preAllocatedVUs: 2,
    //   maxVUs: 4,
    //   exec: 'unauthorizedBehavior',
    // },
  },
};


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
          throw new Error(`Error in getTextChannelMessagesApi. Status: ${res.status}, Body: ${res.body}`);
        }
        const addedMessages = JSON.parse(res.body)
        messages.push(...addedMessages)
    }
  }
  for(var friend of friends){
    const res = getFriendMessagesApi(0, friend.id)
    if(res.status != 200){
      throw new Error(`Error in getFriendMessagesApi. Status: ${res.status}, Body: ${res.body}`);
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
          throw new Error(`Error in getMeetingsOfVideoChannelApi. Status: ${res.status}, Body: ${res.body}`);
        }
        const addedMeetings = JSON.parse(res.body)
        meetings.push(...addedMeetings)
    }
  }

  const result = {user, teams, friends, messages, meetings}
  return result
}

// export function setup() {
//   const user = {}

//   const teamsRes = getJoinedTeamsApi(0, 100)
//   const teams = JSON.parse(teamsRes.body).data

//   const friends = ["d448a4f8-d071-7059-2f2b-fd071185c1da","d448a4f8-d071-7059-2f2b-fd071185c1dc","d448a4f8-d071-7059-2f2b-fd071185c1df"]

//   const messages = []
//   for(var team of teams){
//     const chatChannels = team.channels.filter(channel => channel.type === CHAT_CHANNEL)
//     for(var chatChannel of chatChannels){
//         const res = getTextChannelMessagesApi(0, chatChannel.id)
//         if (res.status !== 200) {
//           throw new Error(`Error in getTextChannelMessagesApi. Status: ${res.status}, Body: ${res.body}`);
//         }
//         const addedMessages = JSON.parse(res.body)
//         messages.push(...addedMessages)
//     }
//   }

//   const meetings = []
//   for(var team of teams){
//     const voiceChannels = team.channels.filter(channel => channel.type === VOICE_CHANNEL)
//     for(var voiceChannel of voiceChannels){
//         const res = getMeetingsOfVideoChannelApi(0, voiceChannel.id)
//         if(res.status != 200){
//           throw new Error(`Error in getMeetingsOfVideoChannelApi. Status: ${res.status}, Body: ${res.body}`);
//         }
//         const addedMeetings = JSON.parse(res.body)
//         meetings.push(...addedMeetings)
//     }
//   }

//   const result = {user, teams, friends, messages, meetings}
//   return result
// }

// General Behaviours
export function browseBehavior(){
    getUserInfoApi()
    getFriendsApi(0, 10)
    getJoinedTeamsApi(0, 10)
}

// User Management Behavior
export function updateUserBehavior(){
    updateUserApi()
}

// Team Management Behaviours
export function createTeamBehavior(){
  createTeamApi()
}

export function updateTeamBehavior(data){
    const team = data.teams[randomNumber(0, data.teams.length)]
    updateTeamApi(team.id)
}

export function createChannelBehavior(data){
    const team = data.teams[randomNumber(0, data.teams.length)]
    createChannelApi(team.id)
}

export function updateChannelBehavior(data){
    const team = data.teams[randomNumber(0, data.teams.length)]
    const channel = team.channels[randomNumber(0, team.channels.length)]
    updateChannelApi(channel.id)
}

export function addFriendsToTeamBehavior(data){
    const team = data.teams[randomNumber(0, data.teams.length)]

    const membersRes = getMembersOfTeamApi(team.id)
    if(membersRes.status != 200){
      throw new Error(`Error in getMembersOfTeamApi. Status: ${res.status}, Body: ${res.body}`);
    }
    const members = JSON.parse(membersRes.body)
    
    // Filter friends who are NOT already members
    const memberUserIds = members.map(member => member.user.id)
    const addedFriendIds = data.friends
        .filter(friend => !memberUserIds.includes(friend.id))
        .map(friend => friend.id);

    if(addedFriendIds.length > 0){
        addFriendsToTeamApi(team.id, addedFriendIds)
    }
}

// Chat Behaviours
export function chatBehavior(data){
    var sendToTeam = randomBool()

    if(sendToTeam){
        const team = data.teams[randomNumber(0, data.teams.length)]
        const chatChannels = team.channels.filter(channel => channel.type ==  CHAT_CHANNEL)
        
        if(chatChannels.length > 0){
          const channel = chatChannels[randomNumber(0, chatChannels.length)]
          sendTextMessageApi(team.id, channel.id)
        }
    }
    else{
        const friend = data.friends[randomNumber(0, data.friends.length)]
        sendTextMessageApi(null, null, friend.id)
    }
}

export function reactMessageBehavior(data){
    const message = data.messages[randomNumber(0, data.messages.length)]
    reactMessageApi(message.id)
}

export function unsendMessageBehavior(data){
    const message = data.messages[randomNumber(0, data.messages.length)]
    unsendMessageApi(message.id)
}

export function getFriendMessagesBehavior(data){
  const friend = data.friends[randomNumber(0, data.friends.length)]
  getFriendMessagesApi(0, friend.id)
}

export function getTextChannelMessagesBehavior(data){
  const team = data.teams[randomNumber(0, data.teams.length)]
  const chatChannels = team.channels.filter(channel => channel.type == CHAT_CHANNEL)
  
  if(chatChannels.length >0){
    const channel = chatChannels[randomNumber(0, chatChannels.length)]
    getTextChannelMessagesApi(0, channel.id)
  }
}

// Meeting Behaviours
export function createMeetingBehavior(data){
    const team = data.teams[randomNumber(0, data.teams.length)]
    const voiceChannels = team.channels.filter(channel => channel.type ==  VOICE_CHANNEL)

    if(voiceChannels.length>0){
      const channel = voiceChannels[randomNumber(0, voiceChannels.length)]
      createMeetingApi(team.id, channel.id)
    }
}

export function updateMeetingBehavior(data){
    const meeting = data.meetings[randomNumber(0, data.meetings.length)]
    updateMeetingApi(meeting.id) 
}

export function reactMeetingBehavior(data){
    const meeting = data.meetings[randomNumber(0, data.meetings.length)]
    reactMeetingApi(meeting.id)
}

export function cancelMeetingBehavior(data){
  const meeting = data.meetings[randomNumber(0, data.meetings.length)]
  cancelMeetingApi(meeting.id)
}

export function getMeetingsOfVideoChannelBehavior(data){
  const team = data.teams[randomNumber(0, data.teams.length)]
  const voiceChannels = team.channels.filter(channel => channel.type == VOICE_CHANNEL)
  
  if(voiceChannels.length >0){
    const channel = voiceChannels[randomNumber(0, voiceChannels.length)]
    getMeetingsOfVideoChannelApi(0, channel.id)
  }
}

// Notification Anomaly Behaviors
export function anomalyAddToCalendarBehavior(data){
    const meeting = data.meetings[randomNumber(0, data.meetings.length)]
    anomalyAddToCalendarApi(
      meeting.id,
      randomBool()
    )
}

export function anomalyGetFriendMessagesBehavior(data){
    const friend = data.friends[randomNumber(0, data.friends.length)]
    anomalyGetFriendMessagesApi(friend.id, 0)
}

export function anomalyGetEmailBehavior(){
    anomalyGetEmailApi()
}

export function anomalyGetJoinedTeamsBehavior(data){
    anomalyGetJoinedTeamsApi(0, 100)
}

// Websocket Behaviors
export function initWsConnectionBehavior(){
    initWsConnectionApi(1)
}

// Errors Behaviors
export function anomalyGetVersionBehavior(){
  anomalyGetVersionApi()
}

export function notFoundBehavior(){
  notFoundApi()
}

export function unauthorizedBehavior(){
  unauthorizedApi()
}