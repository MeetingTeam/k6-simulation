import { deleteTeamApi, getJoinedTeamsApi } from "./apis/team-service.apis.js"

export function setup(){
    var deleteTeamNum = 100

    const teamsRes = getJoinedTeamsApi(0, deleteTeamNum)
    const teams = JSON.parse(teamsRes.body).data
    
    for(var team of teams){
        const res = deleteTeamApi(team.id)
        // if(res.status != 200){
        //     throw Error(`Error in delteting team. Status: ${res.status}, Body: ${res.body}`)
        // }
    }
}

export default function () {
  // do nothing
}