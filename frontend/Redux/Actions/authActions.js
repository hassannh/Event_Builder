import React from 'react'
import { LOGIN ,REGISTER} from '../Types/authTypes'



export const loginAction = (data) => ({
    type: LOGIN,
    payload: data,
  });


  export const registerAction = (data) => ({
    type: REGISTER,
    payload: data,
  });