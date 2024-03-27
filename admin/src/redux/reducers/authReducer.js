import { LOGIN ,REGISTER ,LOGOUT} from "../types/auth";


const initialState = {
    user: [],
    error: null,
  };


  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN:
        return {
          ...state,
          user: action.payload,
          error: null
        };
        case REGISTER:
        return {
          ...state,
          user: action.payload,
          error: null
        };

        case LOGOUT:
        return {
          ...state,
          user: '',
          error: null
        };
        
      default:
        return state;
    }
  };


  export default authReducer