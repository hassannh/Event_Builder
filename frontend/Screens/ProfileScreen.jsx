import { View, Text, TouchableOpacity, Button, StyleSheet, Image } from 'react-native'
import AuthForm from '../Components/AuthForm'
import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { logOutAction } from '../Redux/Actions/authActions'


const ProfileScreen = () => {

    const userData = useSelector(state => state.auth.user.UserData)
    const dispatch = useDispatch()

    console.log('user data :', userData);



    const handleLogout = () => {
        dispatch(logOutAction());
    };

    return (
        <View style={styles.container}>
            {userData ? (
                // <View style={styles.profileContainer}>
                //     <Text style={styles.text}>{userData.firstName}</Text>
                //     <Text style={styles.text}>{userData.lastName}</Text>
                //     <Text style={styles.text}>{userData.email}</Text>
                //     <Text style={styles.text}>{userData.phone}</Text>
                //     <Button title="Logout" onPress={handleLogout} />
                // </View>

                <View >
                    <View style={styles.header}></View>
                    <Image
                        style={styles.avatar}
                        source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }}
                    />
                    <View style={styles.body}>
                        <View style={styles.bodyContent}>
                            <Text style={styles.name}>{userData.firstName} {userData.lastName}</Text>
                            <Text style={styles.email}>{userData.email}</Text>
                            <Text style={styles.email}>{userData.phone}</Text>
                            <Text style={styles.description}>
                                Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis,
                                omittam deseruisse consequuntur ius an,
                            </Text>

                            <TouchableOpacity style={styles.buttonContainer} onPress={handleLogout}>
                                <Text>LogOut</Text>
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                </View>

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
        borderColor: 'yellow',
        backgroundColor: 'gray',
    },
    text: {
        marginBottom: 5,
        fontSize: 16,
    },
});

export default ProfileScreen