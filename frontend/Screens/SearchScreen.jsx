import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native'
import { useEffect ,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { GetEventThunkByUser, createEventThunk } from '../Redux/TunkMiddlwaire/eventThunk';
import { FontAwesome } from "@expo/vector-icons";


const SearchScreen = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const userId = useSelector(state => state.auth.user.UserData._id)
  const events = useSelector(state => state.event.events);
  const [selectedEvent, setSelectedEvent] = useState(null);



  useEffect(() => {
    dispatch(GetEventThunkByUser(userId));
  }, [dispatch, userId]);


  const handleEventPress = (event) => {
    navigation.navigate('details', { event });
  };


  const renderItem = ({ item }) => (

    <TouchableOpacity onPress={() => handleEventPress(item)}>
    <ScrollView style={styles.card}>
      <Image
        // source={event.image}
        source={require('../assets/Eventoday.jpg')}
        style={styles.cardImage}
      />
      <View style={styles.cardContent}>
        <Text style={styles.eventName}>{item.eventName}</Text>
        <Text style={styles.eventDate}>{item.startDate}</Text>
        <Text style={styles.eventDate}>{item.hoursNumber}</Text>
        <Text style={styles.eventDate}>{item.startTime}</Text>
     
      </View>
    </ScrollView>
    </TouchableOpacity>
  );


  return (
    <View>
      <View style={styles.searchHeader}>
        <Text style={{ fontSize: 30, fontWeight: "bold", }}>
          Search
        </Text>
      </View>



      <View style={styles.searchbarContainer}>
        <FontAwesome name="search" size={18} color="grey" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Events"
          placeholderTextColor="grey"
        />
        <TouchableOpacity >
          <FontAwesome name="calendar" size={18} color="grey" style={{ marginLeft: 150 }} />
        </TouchableOpacity>
      </View>



      <FlatList
        data={events}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />

    </View>

  )
}




const styles = StyleSheet.create({
  searchHeader: {
    alignItems: "center",
    justifyContent: "center",
    top: 40,
    marginBottom: 70,
  },
  searchbarContainer: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 15,
    width: 340,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    gap: 20,
    marginBottom: 40,
  },
  searchBody: {
    marginHorizontal: 20,
    marginBottom: 440,
  },
  searchCard: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    paddingBottom: 20,
    marginBottom: 40,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    margin: 10,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardContent: {
    padding: 10,
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  eventDate: {
    fontSize: 16,
    color: '#888',
    marginTop: 5,
  },
  eventLocation: {
    fontSize: 16,
    color: '#888',
    marginTop: 5,
  },
})

export default SearchScreen