import { View, Text,Image ,StyleSheet} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'



const HomeScreen = () => {

    // const userData = useSelector(state => state.auth.user.token)


    return (
        <View >
            {/* <Image style={styles.homePic} source={require('../assets/eventHome.png')}/>

           <Text style={styles.title}> Create Your Event</Text>
           <Text style={styles.title}> in Your Own Way !</Text> */}

        </View>
    )
}


const styles = StyleSheet.create({

    homePic:{
        height:'90%',
        width:'100%'
    },
    title:{
        fontSize:20,
    }
})

export default HomeScreen