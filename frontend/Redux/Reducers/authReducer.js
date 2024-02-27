import { LOGIN ,REGISTER} from "../Types/authTypes";


const initialState = {
    user: [],
    error: null,
  };


  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN:
        return {
          ...state,
          data: action.payload,
          error: null
        };
        case REGISTER:
        return {
          ...state,
          data: action.payload,
          error: null
        };
        
      default:
        return state;
    }
  };


  export default authReducer