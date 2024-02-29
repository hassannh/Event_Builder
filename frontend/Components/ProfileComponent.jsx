import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { logOutAction } from '../Redux/Actions/authActions'



const ProfileComponent = () => {

    const userData = useSelector(state => state.auth.user.UserData)
    const dispatch = useDispatch()

    console.log('user data :', userData);



    const handleLogout = () => {
        dispatch(logOutAction());
    };
    return (
        <View >

            <View style={styles.header}>
                
            </View>
            
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
                        <Text></Text>
                        BIO
                        Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis,
                        omittam deseruisse consequuntur ius an,
                    </Text>

                    <TouchableOpacity style={styles.buttonContainer} onPress={handleLogout}>
                        <Text style={styles.textButton}>LogOut</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    profileContainer: {
        // alignItems: 'center',
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: '#00BFFF',
        marginBottom: 10,
        position: 'absolute',
        marginTop: 310,
        marginLeft: 20
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
        // alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: '#696969',
        fontWeight: '600',
    },
    header: {
        backgroundColor: '#2C3539',
        height: 400,
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
        // textAlign: 'center',
    },
    buttonContainer: {
        marginTop: 180,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 150,
        borderRadius: 30,
        backgroundColor: '#00BFFF',


    },
    text: {
        marginBottom: 5,
        fontSize: 16,
    },
    textButton: {
        fontSize: 16,
        color: 'white'
    }
});
export default ProfileComponent