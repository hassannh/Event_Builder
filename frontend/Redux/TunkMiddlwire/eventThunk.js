import axios from 'axios';
import {CreateEventAction} from '../Actions/eventAction'

const createEventThunk = (eventData) => async (dispatch) => {
    try {
        const response = await axios.post('http://192.168.15.96:8000/api/event/create', eventData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = response.data;

        
        if (data && data._id) {

            dispatch(CreateEventAction(data));
        } else {
            console.error('No event data received in create event response');
        }
    } catch (error) {
        console.error('Error while creating event:', error);
        dispatch(CreateEventAction(error.message));
    }
};

export default createEventThunk;
