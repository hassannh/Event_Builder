import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FontAwesome } from "@expo/vector-icons";
import HomeScreen from '../Screens/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import AddEventScreen from '../Screens/AddEventScreen';
import SearchScreen from '../Screens/SearchScreen';



const TabBar = createBottomTabNavigator();


const Index = () => {


    return (

        <TabBar.Navigator
            screenOptions={() => ({
                tabBarShowLabel: false,
                headerShown: false,


                tabBarStyle: {
                    position: "absolute",
                    bottom: 5,
                    left: 20,
                    right: 20,
                    backgroundColor: "#ffffff",
                    borderRadius: 15,
                    height: 70,
                    // ...styles.shadow,
                },

            })}>

            <TabBar.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <View>
                            <FontAwesome
                                name="home"
                                size={32}
                                color={focused ? "#76468F" : "#748c94"}
                            />
                            <Text
                                style={{
                                    color: focused ? "#76468F" : "#748c94",
                                    fontSize: 12,
                                }}
                            >
                                Home
                            </Text>
                        </View>
                    ),
                }}
                tabBarOptions={{
                    tabBarActiveTintColor: '#00BFFF',
                    // showLabel: false,
                }}
            />


            <TabBar.Screen name="Search" component={SearchScreen}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <View>
                            <FontAwesome
                                name="search"
                                size={32}
                                color={focused ? "#76468F" : "#748c94"}
                            />

                            <Text
                                style={{
                                    color: focused ? "#76468F" : "#748c94",
                                    fontSize: 12,
                                }}
                            >
                                Search
                            </Text>

                        </View>
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
                        <View>
                            <FontAwesome
                                name="plus"
                                size={32}
                                color={focused ? "#76468F" : "#748c94"}
                            />
                            <Text
                                style={{
                                    color: focused ? "#76468F" : "#748c94",
                                    fontSize: 12,
                                }}
                            >
                                Event
                            </Text>

                        </View>
                    ),
                }}
            />


            <TabBar.Screen name="profile" component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <View>
                            <FontAwesome
                                name="user"
                                size={32}
                                color={focused ? "#76468F" : "#748c94"}
                            />
                            <Text
                                style={{
                                    color: focused ? "#76468F" : "#748c94",
                                    fontSize: 12,
                                }}
                            >
                                Profil
                            </Text>

                        </View>
                    ),
                }}
            />






        </TabBar.Navigator>
    )
}

export default Index