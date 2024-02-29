import React from 'react'
import { LOGIN ,REGISTER ,LOGOUT} from '../Types/authTypes'



export const loginAction = (data) => ({
    type: LOGIN,
    payload: data,
  });


  export const registerAction = (data) => ({
    type: REGISTER,
    payload: data,
  });


  export const logOutAction = () => ({
    type: LOGOUT
  });