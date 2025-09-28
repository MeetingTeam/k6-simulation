import { randomBool, randomString } from "../utils.js";
import { CHAT_CHANNEL, headerConfig, TEAM_SERVICE_API, VOICE_CHANNEL } from "./constants.js";
import http from 'k6/http';

export function createTeamApi() {
  return http.post(
    `${TEAM_SERVICE_API}/team`,
    JSON.stringify({
      teamName: randomString(6),
    }),
    { headers: headerConfig }
  );
}

export function updateTeamApi(id) {
  return http.patch(
    `${TEAM_SERVICE_API}/team`,
    JSON.stringify({
      id: id,
      teamName: randomString(6),
      autoAddMember: randomBool().toString(),
    }),
    { headers: headerConfig }
  );
}

export function getJoinedTeamsApi(pageNo, pageSize) {
  return http.get(
    `${TEAM_SERVICE_API}/team?pageNo=${pageNo}&pageSize=${pageSize}`,
    { headers: headerConfig }
  );
}

export function deleteTeamApi(id) {
  return http.del(
    `${TEAM_SERVICE_API}/team/${id}`,
    null,
    { headers: headerConfig }
  );
}

export function addFriendsToTeamApi(teamId, friendIds) {
  return http.post(
    `${TEAM_SERVICE_API}/team-member/add-friends`,
    JSON.stringify({
        teamId: teamId,
        friendIds: friendIds
    }),
    { headers: headerConfig }
  );
}

export function leaveTeamApi(teamId) {
  return http.del(
    `${TEAM_SERVICE_API}/team-member/leave-team/${teamId}`,
    null,
    { headers: headerConfig }
  );
}

export function kickMemberApi(teamId, memberId) {
  return http.del(
    `${TEAM_SERVICE_API}/team-member/kick-member`,
    JSON.stringify({
      teamId: teamId,
      memberId: memberId,
    }),
    { headers: headerConfig }
  );
}

export function getMembersOfTeamApi(teamId) {
  return http.get(
    `${TEAM_SERVICE_API}/team-member/${teamId}`,
    { headers: headerConfig }
  );
}

export function createChannelApi(teamId) {
    return http.post(
        `${TEAM_SERVICE_API}/channel`, 
        JSON.stringify({
            teamId: teamId,
            channelName: randomString(6),
            description: randomString(20),
            type: randomBool()?CHAT_CHANNEL:VOICE_CHANNEL
        }), 
        { headers: headerConfig }
    );
}

export function updateChannelApi(channelId) {
    return http.patch(
        `${TEAM_SERVICE_API}/channel`,  
        JSON.stringify({
            id: channelId,
            channelName: randomString(6),
            description: randomString(20),
        }), 
        { headers: headerConfig }
    );
}

export function deleteChannelApi(channelId) {
    return http.del(`${TEAM_SERVICE_API}/channel/${channelId}`);
}