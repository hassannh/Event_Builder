import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import AddEventScreen from '../Screens/AddEventScreen';



const TabBar = createBottomTabNavigator();


const Index = () => {


    return (

        <TabBar.Navigator screenOptions={() => ({
            tabBarShowLabel: false,
            headerShown: false,


            tabBarStyle: {
                height: 60,
                width: '90%',
                marginBottom: 12,
                paddingHorizontal: 5,
                marginLeft: 20,
                borderRadius: 10,
                backgroundColor: '#2C3539',
            },

        })}>

            <TabBar.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon name="home" size={40} color={focused ? '#00BFFF' : 'white'} />
                    ),
                }}
                tabBarOptions={{
                    tabBarActiveTintColor: '#00BFFF',
                    // showLabel: false,
                }}
            />

            <TabBar.Screen name="event" component={AddEventScreen}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon name="add" size={40} color={focused ? '#00BFFF' : 'white'} />
                    ),
                }}
            />


            <TabBar.Screen name="profile" component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon name="person" size={40} color={focused ? '#00BFFF' : 'white'} />
                    ),
                }}
            />






        </TabBar.Navigator>
    )
}

export default Index