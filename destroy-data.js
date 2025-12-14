import { deleteTeamApi, getJoinedTeamsApi } from "./apis/team-service.apis.js"
import { deleteAllMessages } from "./apis/chat-service-apis.js"

export function setup(){
    var deleteTeamNum = 1000

    const teamsRes = getJoinedTeamsApi(0, deleteTeamNum)
    const teams = JSON.parse(teamsRes.body).data
    
    for(var team of teams){
        const res = deleteTeamApi(team.id)
        if(res.status != 200){
            throw Error(`Error in deleting team. Status: ${res.status}, Body: ${res.body}`)
        }
    }

    // Delete all messages in MongoDB
    deleteAllMessages()
}

export default function () {
  // do nothing
}