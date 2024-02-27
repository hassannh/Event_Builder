import axios from 'axios';
import { registerAction, loginAction } from '../Actions/authActions'




const loginTunk = (requestData) => async (dispatch) => {

    try {

        const response = await axios.post("http://localhost:8000/api/user/login", {

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

    console.log('hahya jaaaat',requestData);

    try {

        const response = await axios.post("http://localhost:8000/api/user/register", {
            FirstName: requestData.firstName,
            LastName: requestData.LastName,
            Phone: requestData.phone,
            Email: requestData.email,
            Password: requestData.password,
        })

        const data = response.data;

        if (data && data.UserData && data.token) {
            localStorage.setItem('token', data.token);
            localStorage.setItem("User", JSON.stringify(data.UserData))
            dispatch(registerAction(data.UserData));
        }
    } catch (error) {
        console.error('Error while sending get request:', error);
    };

}

export { registerTunk, loginTunk }