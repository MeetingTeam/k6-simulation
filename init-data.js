import { sendTextMessageApi } from "./apis/chat-service-apis.js";
import { CHAT_CHANNEL, VOICE_CHANNEL } from "./config.js";
import { createMeetingApi } from "./apis/meeting-service-apis.js";
import { createChannelApi, createTeamApi,  getJoinedTeamsApi } from "./apis/team-service.apis.js"
import { getFriendsApi } from "./apis/user-service-apis.js";

export function setup(){
    const createTeamNum = 10
    const createChannelNum = 4
    const createMessageNum = 20
    const createMeetingNum = 4
    
    for(var i=0; i<createTeamNum; i++){
        var teamRes = createTeamApi();
        if(teamRes.status != 200){
            throw new Error(`Error in setup -> createTeamApi. Status: ${teamRes.status}, Body: ${teamRes.body}`);
        }
        const team = JSON.parse(teamRes.body)

        for(var j=0; j< (createChannelNum-1); j++){
            const channelRes = createChannelApi(team.id)
            if(channelRes.status != 200){
                throw new Error(`Error in setup -> createChannelApi. Status: ${channelRes.status}, Body: ${channelRes.body}`);
            }
        }
    }

    const teamsRes = getJoinedTeamsApi(0, 100)
    const teams = JSON.parse(teamsRes.body).data
    for(var team of teams){
        for(var channel of team.channels){
            if(channel.type === CHAT_CHANNEL){
                for(var j=0; j<createMessageNum; j++){
                    sendTextMessageApi(team.id, channel.id)
                }
            }
            else if(channel.type === VOICE_CHANNEL){
                for(var j=0; j<createMeetingNum; j++){
                    createMeetingApi(team.id, channel.id)
                }
            }
        }
    }

    const friendsRes = getFriendsApi(0, 100)
    const friends = JSON.parse(friendsRes.body).data
    for(var friend of friends){
        for(var j=0; j<createMessageNum; j++){
            sendTextMessageApi(null, null, friend.id)
        }
    }
}

export default function () {
  // do nothing
}