import axios from 'axios'
import { registerAction, loginAction } from '../Actions/authActions'
import  AsyncStorage , { useAsyncStorage} from '@react-native-async-storage/async-storage';



const loginTunk = (requestData) => async (dispatch) => {

    try {

        const response = await axios.post('http://localhost:8000/api/user/login', {

            email: requestData.email,
            password: requestData.password

        })

        const data = response.data;

        if (data && data.user && data.token) {
            localStorage.setItem('token', data.token);
            localStorage.setItem("User", JSON.stringify(data.user))
            dispatch(loginAction(data.user));
        }
    } catch (error) {
        console.error('Error while sending get request:', error);
    };

}

const registerTunk = (requestData) => async (dispatch) => {
    try {

        const response = await axios.post("http://192.168.8.208:8000/api/user/register", requestData, {
            headers : {
                "Content-Type" : "application/json"
            }
        });

        const data = response.data;


        console.log('token and user', data);

        if (data && data.token) {
            AsyncStorage.setItem('Token', data.token);
            // await AsyncStorage.setItem('userToken', data.user);
            dispatch(registerAction(data));
            return data
        }else{
            console.log("Storage Failed ");
        }
        
          
    } catch (error) {
        console.error('Error while sending post request:', error);
    };
}

export { registerTunk, loginTunk }