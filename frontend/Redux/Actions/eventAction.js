import React from 'react'
import { CREATE_EVENT,GET_ALL_EVENTS} from '../Types/eventTypes'



export const getAllEventsAction = (data) => ({
    type: GET_ALL_EVENTS,
    payload: data,
  });


  export const CreateEventAction = (data) => ({
    type: CREATE_EVENT,
    payload: data,
  });


