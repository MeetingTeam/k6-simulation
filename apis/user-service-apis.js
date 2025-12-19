import { headerConfig, USER_SERVICE_API } from "../config.js";
import http from 'k6/http';

const enableDownServices = true

export function updateUserApi() {
  try{
    return http.patch(
      `${USER_SERVICE_API}/user`,
      JSON.stringify({
        nickName: "Quang Teo",
        gender: false,
        phoneNumber: "0946851172",
        birthday: "2004-06-28",
      }),
      { headers: headerConfig }
    );
  }
  catch (e){
    if(!enableDownServices) throw e
    else return {}
  }
}

export function getUserInfoApi() {
  try{
    return http.get(
      `${USER_SERVICE_API}/user`,
      { headers: headerConfig }
    );
  }
  catch (e){
    if(!enableDownServices) throw e
    else return {}
  }
}

export function getFriendsApi(pageNo, pageSize) {
  try{
    return http.get(
      `${USER_SERVICE_API}/friend?pageNo=${pageNo}&pageSize=${pageSize}`,
      { headers: headerConfig }
    );
  }
  catch (e){
    if(!enableDownServices) throw e
    else return {}
  }
}

