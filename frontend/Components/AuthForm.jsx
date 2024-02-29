import { View, Text, TextInput, StyleSheet, TouchableOpacity, Switch } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginTunk, registerTunk } from '../Redux/TunkMiddlwair/authTunk'

const AuthForm = () => {


    const dispatch = useDispatch();


    const [isLogin, setIsLogin] = useState(true);
    const [formData, setformData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: ''
    });

    const [loginData, setloginData] = useState({
        email: '',
        password: ''
    });

    const handleChangelogin = (name, value) => {

        setloginData((loginData) => ({
            ...loginData,
            [name]: value,
        }));
    }

    const handleChange = (name, value) => {

        setformData((prevformData) => ({
            ...prevformData,
            [name]: value,
        }));
    }

    const toggleSwitch = () => {
        setIsLogin((prevIsLogin) => !prevIsLogin);
    };




    const handleSubmit = async () => {
        ;
        if (isLogin) {
            dispatch(loginTunk(loginData))
        } else {
            dispatch(registerTunk(formData));
        }
    }

    return (

        <View style={styles.Container}>
            <View style={styles.switchContainer}>

                <Text>Switch to {isLogin ? 'Register' : 'Login'}</Text>
            </View>
            <Switch value={isLogin} onValueChange={toggleSwitch} />



            {!isLogin ? (


                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} name="firstName" placeholder="First Name" onChangeText={(text) => handleChange('firstName', text)} />
                    <TextInput style={styles.input} name="lastName" placeholder="Last Name" onChangeText={(text) => handleChange('lastName', text)} />
                    <TextInput style={styles.input} name="phone" placeholder="Phone" onChangeText={(text) => handleChange('phone', text)} />
                    <TextInput style={styles.input} name="email" placeholder="Email" onChangeText={(text) => handleChange('email', text)} />
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        name="password" placeholder="Password"
                        onChangeText={(text) => handleChange('password', text)}
                    />
                </View>
            ) : (

                <View style={styles.inputContainer}>

                    <TextInput style={styles.input} name="email" placeholder="Email" onChangeText={(text) => handleChangelogin('email', text)} />

                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        name="password" placeholder="Password"
                        onChangeText={(text) => handleChangelogin('password', text)}
                    />
                </View>

            )}




            <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
                <Text style={styles.ButtonText}>Submit</Text>
            </TouchableOpacity>
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