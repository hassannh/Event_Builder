import React from 'react'
import { CREATE_EVENT,GET_ALL_EVENTS} from '../Types/eventTypes'



export const getAllEventsAction = (event) => ({
    type: GET_ALL_EVENTS,
    payload: event,
  });


  export const createEvent = (data) => ({
    type: CREATE_EVENT,
    payload: data,
  });


