import axios from 'axios';
import {CreateEventAction ,getAllEventsAction} from '../Actions/eventAction'

const createEventThunk = (eventData) => async (dispatch) => {
    try {
        console.log('eventthunk',eventData);
        const response = await axios.post('http://192.168.15.96:8000/api/event/create', eventData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = response.data;

        console.log(data);

        if (data ) {
            dispatch(CreateEventAction(data));
        } else {
            console.error('No event data received in create event response');
        }
    } catch (error) {
        console.error('Error while creating event:', error);
    }
};




const GetEventThunkByUser = (userId) => async (dispatch) => {
    try {
        const response = await axios.get(`http://192.168.15.96:8000/api/event/getById/${userId}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = response.data;

        console.log(data);

        if (data ) {
            dispatch(getAllEventsAction(data));
        } else {
            console.error('No event data received ');
        }
    } catch (error) {
        console.error('Error while getting user events:', error);
    }
};

export default {createEventThunk , GetEventThunkByUser};
