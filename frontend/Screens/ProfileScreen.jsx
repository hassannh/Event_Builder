import { View, Text, TouchableOpacity, Button, StyleSheet, Image } from 'react-native'
import AuthForm from '../Components/AuthForm'
import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { logOutAction } from '../Redux/Actions/authActions'
import ProfileComponent from '../Components/ProfileComponent'


const ProfileScreen = () => {

    const userData = useSelector(state => state.auth.user.UserData)



    return (
        <View style={styles.container}>
            {userData ? (

                <ProfileComponent />

            ) : (

                <AuthForm />
            )
            }



        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileContainer: {
        alignItems: 'center',
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: 'white',
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130,
    },
    name: {
        fontSize: 22,
        color: '#FFFFFF',
        fontWeight: '600',
    },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: '#696969',
        fontWeight: '600',
    },
    header: {
        backgroundColor: 'gray',
        height: 200,
    },
    email: {
        fontSize: 16,
        color: '#00BFFF',
        marginTop: 10,
    },
    description: {
        fontSize: 16,
        color: '#696969',
        marginTop: 10,
        textAlign: 'center',
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#696969',
        backgroundColor: 'gray',
    },
    text: {
        marginBottom: 5,
        fontSize: 16,
    },
});

export default ProfileScreen