import { endpoint } from "../../../../config/endpoint";
import { api } from '@api/RestAPI'
import { SET_USER } from "../constants";

export const SetUser = (user) => ({
  type: SET_USER,
  user
});
export const SetAllUser = (users) => ({
  type: 'ALL_USER',
  users
});

export const updateUser = (data) => ({
  type: 'UPDATE_USER',
  data
})

export const ClearUser = () => ({
  type: 'CLEAR_USER'
})

export const SendSMS = (payload) => {
  return dispatch => {
    const url = endpoint.sms;
    return new Promise((resolve, reject) =>{
      api.post(url, payload).then((res) => {
        resolve(res)
      }, error => {
        reject(error)
      })
    }) 
  }
}

export const LoginUser = (payload) => {
  return dispatch => {
    const url = endpoint.login;
    return new Promise((resolve, reject) => {
      api.post(url, payload).then((res) => {
        dispatch(SetUser(res.data))
        resolve(res)
      }, error => {
        reject(error)
      })
    })
  }
}