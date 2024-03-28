import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './Redux/store'
import navigator from './TabBarNavigation/Index'
import EventDetailsScreen from './Screens/EventDetails';


const Stack = createNativeStackNavigator();


export default function App() {

  return (


    <Provider store={store}>
      <NavigationContainer>

        <Stack.Navigator>

          <Stack.Screen name="AppTabs" component={navigator}  options={{ headerShown: false }}/>
          <Stack.Screen name="details" component={EventDetailsScreen}  options={{ headerShown: true }}/>

        </Stack.Navigator>

      </NavigationContainer>
    </Provider>
  );



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
