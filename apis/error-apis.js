import { CHAT_SERVICE_API, MEETING_SERVICE_API, TEAM_SERVICE_API, USER_SERVICE_API } from "./constants.js";
import http from 'k6/http';

export function anomalyGetVersionApi() {
  return http.get(
    `${USER_SERVICE_API}/user/anomaly/version`
  );
}

export function notFoundApi() {
    let rand = Math.random()
    if(rand<0.25){
        return http.get(`${CHAT_SERVICE_API}/not-found`);
    }
    else if(rand <0.5){
        return http.get(`${MEETING_SERVICE_API}/not-found`);
    }
    else if(rand <0.75){
        return http.get(`${TEAM_SERVICE_API}/not-found`);
    }
    else{
        return http.get(`${USER_SERVICE_API}/not-found`);
    }
}

export function unauthorizedApi() {
    let rand = Math.random()
    let expiredToken = "eyJraWQiOiIwSXY2eWJoNk9TbW16WkprajZcL1UzUlFLM3ZFUXc1ZkRJRGhjZFpta0ViUT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhNGU4MDRjOC02MGExLTcwMjEtMjFlZS0zOTNmZGZiZTI0OTIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfeTMwZWlKeWpmIiwiY29nbml0bzp1c2VybmFtZSI6ImE0ZTgwNGM4LTYwYTEtNzAyMS0yMWVlLTM5M2ZkZmJlMjQ5MiIsIm9yaWdpbl9qdGkiOiI5ODFjODlkZi0xZTY0LTRlMzctYjg3Zi03YjRjNTE3NmU4N2QiLCJhdWQiOiI0dTIyYTM4NDRoM205M3EwcTZiODdtNGlkbCIsImV2ZW50X2lkIjoiMjMxMTIyNjktZjJhNC00NDA3LWIzM2MtNjc4ZmExMjU3ZmQ3IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE3NTc5NDYzMjcsImV4cCI6MTc1ODAwNjQ2MCwiaWF0IjoxNzU4MDAyODYwLCJqdGkiOiI3NjIxZmI1Ny03OGUyLTQ5ODgtYjQ1OS04NWZiNGEwZGJjMDgiLCJlbWFpbCI6IjIyNTIwNTI3QGdtLnVpdC5lZHUudm4ifQ.Jyz0iqowrlyCSwNxLbB5MDRqwZxbcArbkKFjaYRlPEuZxGGjEQAFctztVu-EstgfdH1zLYU9-dBJp43tK-64igl9Bssd187AuFIFPSgH_DHnp2CzorI0d1KF9MJxEQVRqBzw_T5KqqUZmhm6-tplJo1O83CGE0Hw4xaAAmnsv82_ymom12qv5D8ojbjVsAdxj_M1oQb65R4Hy9dz257s1pBOoRI1Kb9erHlcdOngwvtgQ7y_zBfpmDGjiYgDHcQL_rIhdF8I7tZagUOsflEGilwS6w8u0LWld-qu1Zk7-ezLWHuliz4fDu7JNg94VfyqGmFr-F1jRwo-PNehDtuugw"
    const headerConfig = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${expiredToken}`
    }

    if(rand<0.25){
        return http.get(
            `${CHAT_SERVICE_API}/message/friend/b09ec032-a98b-4285-802e-81704bf253bc?receivedMessageNum=0`,
            { headers: headerConfig }
        );
    }
    else if(rand <0.5){
        return http.get(
            `${MEETING_SERVICE_API}/meeting?channelId=b09ec032-a98b-4285-802e-81704bf253bc&receivedMeetingNum=0`,
            { headers: headerConfig }
        );
    }
    else if(rand <0.75){
        return http.get(
            `${TEAM_SERVICE_API}/team-member/b09ec032-a98b-4285-802e-81704bf253bc`,
            { headers: headerConfig }
        );
    }
    else {
        return http.get(
            `${USER_SERVICE_API}/user`,
            { headers: headerConfig }
        );
    }
}