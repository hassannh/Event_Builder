import axios from 'axios'
import { registerAction, loginAction } from '../Actions/authActions'
import AsyncStorage from '@react-native-async-storage/async-storage';



const loginTunk = (requestData) => async (dispatch) => {

    try {


        const response = await axios.post('http://192.168.15.96:8000/api/user/login',requestData,{
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )

        const data = response.data;

        if (data) {
            await AsyncStorage.setItem('jwtToken', data.token);
            console.log('Stored Token:', data.token);
            dispatch(loginAction(data));
        }
    } catch (error) {
        console.log(error);
        console.error('Error while sending get request:', error);
    };

}

const registerTunk = (requestData) => async (dispatch) => {
    try {

        const response = await axios.post("http://192.168.15.96:8000/api/user/register", requestData, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = response.data;


        if (data && data.token) {
            await AsyncStorage.setItem('Token', data.token);
            console.log('Stored Token:', data.token);
            dispatch(registerAction(data));
            return data
        } else {
            console.log("Storage Failed ");
        }


    } catch (error) {
        console.error('Error while sending post request:', error);
    };
}

export { registerTunk, loginTunk }