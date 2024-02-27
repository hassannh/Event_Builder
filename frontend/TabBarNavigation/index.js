import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';



const TabBar = createBottomTabNavigator();


const index = () => {


  return (
    <TabBar.Navigator>

<TabBar.Screen name="Home" component={HomeScreen}
            options={{
                tabBarIcon: ({ color, size, focused }) => (
                    <Icon name="home" size={40} color={focused ? '#6C5ECF' : '#464857'} />
                ),
            }}
            tabBarOptions={{
                tabBarActiveTintColor: '#6C5ECF',

            }}
        />


<TabBar.Screen name="profile" component={ProfileScreen}
            options={{
                tabBarIcon: ({ color, size, focused }) => (
                    <Icon name="profile" size={40} color={focused ? '#6C5ECF' : '#464857'} />
                ),
            }}
        />



    </TabBar.Navigator>
  )
}

export default index