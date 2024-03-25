import { GET_ALL_EVENTS, CREATE_EVENT } from "../Types/eventTypes";



const initialState = {
    events: [],
    error: null,
};



const eventReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_ALL_EVENTS:
            return {
                ...state,
                events: action.payload,
                error: null
            };

            case CREATE_EVENT:
            return {
                ...state,
                events: action.payload,
                error: null
            };


        default:
            return state;

    }




}

export default eventReducer