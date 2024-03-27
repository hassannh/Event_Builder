import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button, ScrollView } from 'react-native';
import { useDispatch ,useSelector} from 'react-redux';
import  createEventThunk  from '../Redux/TunkMiddlwire/eventThunk'
import DatePicker from "expo-datepicker";
import { Picker } from '@react-native-picker/picker';
import { Entypo } from "@expo/vector-icons";
import PersonnelComponent from './PersonnelComponent';
import ToolsComponent from './ToolsComponent';
import SnacksComponent from './SnacksComponent';



const AddEvent = () => {
  const [eventName, setEventName] = useState('');
  const [startDate, setStartDate] = useState(new Date().toString());
  const [startTime, setStartTime] = useState('');
  const [hoursNumber, setHoursNumber] = useState('');
  const [wantTools, setWantTools] = useState(false);
  const [wantPersonnel, setWantPersonnel] = useState(false);
  const [location, setLocation] = useState('');
  const [selectedTools, setSelectedTools] = useState([]);
  const [selectedPersonnel, setSelectedPersonnel] = useState([]);


  const userId = useSelector((state) => state.auth.user.UserData._id)
  console.log(userId);


  const dispatch = useDispatch();

  const locations = [
    { label: 'Location 1', value: 'Location 1' },
    { label: 'Location 2', value: 'Location 2' },
    { label: 'Location 3', value: 'Location 3' },
    { label: 'Location 4', value: 'Location 4' },
    { label: 'Location 5', value: 'Location 5' },
  ];

  const tools = [
    { type: 'chair', quantity: 10, price: 5.0 },
    { type: 'table', quantity: 5, price: 10.0 },
    { type: 'camera', quantity: 2, price: 50.0 }
  ];

  const personnel = [
    { type: 'security', quantity: 5, price: 20.0 },
    { type: 'chef', quantity: 3, price: 30.0 },
    { type: 'cleaner', quantity: 2, price: 15.0 }
  ];

  const handleSubmit = (userId) => {

    const eventData = {
      eventName,
      startDate,
      startTime,
      hoursNumber: parseInt(hoursNumber),
      location,
      tools: wantTools ? selectedTools : [],
      personnel: wantPersonnel ? selectedPersonnel : [],
      userId:userId
    };


    console.log(eventData);

    dispatch(createEventThunk(eventData));
  };

 

  const handleAddTools = (tools) => {
    setSelectedTools(tools);
  };

  const handleAddPersonnel = (personnel) => {
    setSelectedPersonnel(personnel);
  };

  return (



    <View style={styles.container}>
      <ScrollView >

        <Text style={styles.label}>Event Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Event Name"
          value={eventName}
          onChangeText={setEventName}

        />

        <Text style={styles.label}>Start Date:</Text>

        <DatePicker
          date={startDate}
          onChange={(date) => setStartDate(date)}
          icon={<Entypo name="chevron-right" size={40} color="#689CA3" />}
        />

        <Text style={styles.label}>Start Time:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Start Time"
          value={startTime}
          onChangeText={setStartTime}
        />

        <Text style={styles.label}>Hours Number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Hours Number"
          value={hoursNumber}
          onChangeText={setHoursNumber}
          keyboardType="numeric"
        />
      
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={wantTools ? styles.radioButtonActive : styles.radioButtonInactive}
            onPress={() => setWantTools(!wantTools)}
          >
            <Text>{wantTools ? 'Tools: Yes' : 'Tools: No'}</Text>
          </TouchableOpacity>
        </View>
        {wantTools && <ToolsComponent tools={tools} onAddTools={handleAddTools} />}


        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={wantPersonnel ? styles.radioButtonActive : styles.radioButtonInactive}
            onPress={() => setWantPersonnel(!wantPersonnel)}
          >
            <Text>{wantPersonnel ? 'Personnel: Yes' : 'Personnel: No'}</Text>
          </TouchableOpacity>
        </View>
        {wantPersonnel && <PersonnelComponent personnel={personnel} onAddPersonnel={handleAddPersonnel} />}

        <Text style={styles.label}>Location:</Text>
        <Picker
          style={styles.input}
          selectedValue={location}
          onValueChange={(itemValue, itemIndex) => setLocation(itemValue)}
        >
          <Picker.Item label="Select Location" value="" />
          {locations.map((location, index) => (
            <Picker.Item key={index} label={location.label} value={location.value} />
          ))}
        </Picker>

      </ScrollView>
      <Button style={styles.submit} title="Submit" onPress={() => handleSubmit(userId)} />

    </View>
  );


};












































const styles = StyleSheet.create({
  wrapper: {},
  container: {
    padding: 20,
    marginTop: 10,
    overflow: 'scroll',
    height:'95%'
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 2,
  },
  submit: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
  },
  radioButtonActive: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
  },
  radioButtonInactive: {
    backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 5,
  },
  selectContainer: {
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  selectInput: {
    height: 40,
    paddingLeft: 10,
  },
  checkboxContainer: {
    marginBottom: 20,
    justifyContent: 'center',
    width: 400
  },

});

export default AddEvent;
