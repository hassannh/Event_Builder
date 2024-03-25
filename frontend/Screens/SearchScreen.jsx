import { View, Text, StyleSheet,TextInput ,TouchableOpacity} from 'react-native'
import React from 'react'
import { FontAwesome } from "@expo/vector-icons";


const SearchScreen = () => {
  return (
    <View>
      <View style={styles.searchHeader}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Search
        </Text>
      </View>

      <View style={styles.searchbarContainer}>
        <FontAwesome name="search" size={18} color="grey" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Events"
          placeholderTextColor="grey"
        //   onChangeText={(text) => {
        //     handleSearch(text);
        //   }}
        //   value={searchText}
        />
        <TouchableOpacity >
          <FontAwesome name="calendar" size={18} color="grey"  style={{marginLeft:150}}/>
        </TouchableOpacity>
      </View>
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
})

export default SearchScreen