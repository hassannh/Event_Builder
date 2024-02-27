import { View, Text, TextInput, StyleSheet, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerTunk } from '../Redux/TunkMiddlwair/authTunk'

const AuthForm = () => {


    const dispatch = useDispatch();


    const [isLogin, setIsLogin] = useState(true);
    const [signUp, setSignUp] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: ''
    });


    const handleChange = (name, value) => {

        setSignUp((prevSignUp) => ({
            ...prevSignUp,
            [name.toLowerCase()]: value,
        }));
    }


    const toggleSwitch = () => {
        setIsLogin((prevIsLogin) => !prevIsLogin);
    };



    const register = async () => {
        console.log('State just before dispatch:', signUp);
        dispatch(registerTunk(signUp))
        console.log('Form submitted!');
    }






    return (
        <View style={styles.Container}>
            <View style={styles.switchContainer}>

                <Text>Switch to {isLogin ? 'Register' : 'Login'}</Text>

                <Switch value={isLogin} onValueChange={toggleSwitch} />

            </View>
            <Text>{isLogin ? 'Login Form' : 'Register Form'}</Text>



            <View style={styles.inputContainer}>
                {!isLogin && (
                    <>
                        <TextInput style={styles.input} name="FirstName" placeholder="First Name" onChangeText={(text) => handleChange('FirstName', text)} />
                        <TextInput style={styles.input} name="LastName" placeholder="Last Name" onChangeText={(text) => handleChange('LastName', text)} />
                        <TextInput style={styles.input} name="Phone" placeholder="Phone" onChangeText={(text) => handleChange('Phone', text)} />

                    </>
                )}



                <TextInput style={styles.input} name="Email" placeholder="Email" onChangeText={(text) => handleChange('Email', text)} />

                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    name="Password" placeholder="Password"
                    onChangeText={(text) => handleChange('Password', text)}
                />

                <TouchableOpacity onPress={register} style={styles.submitButton}>
                    <Text style={styles.ButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>




        </View>
    )
}

const styles = StyleSheet.create({

    Container: {
        width: '100%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'red'
    },

    inputContainer: {
        width: '88%',
        height: '80%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'blue'
    },
    input: {
        width: 300,
        height: 60,
        backgroundColor: 'gray',
        marginTop: 9,
        borderRadius: 30,
        paddingLeft: 12,
        borderWidth: 1,
        borderColor: 'yellow',
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    validationText: {
        color: 'red',
        marginTop: 5,
    },
    submitButton: {
        marginTop: 20,
        backgroundColor: 'gray',
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'yellow',
        width: 120,

    },
    ButtonText: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 20

    },

})

export default AuthForm