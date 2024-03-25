import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { Picker } from '@react-native-picker/picker';
import PersonnelComponent from './PersonnelComponent';
import ToolsComponent from './ToolsComponent';
import SnacksComponent from './SnacksComponent';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PagerView from 'react-native-pager-view';
const AddEvent = () => {
  const [eventName, setEventName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [hoursNumber, setHoursNumber] = useState('');
  const [wantSnacks, setWantSnacks] = useState(false);
  const [wantTools, setWantTools] = useState(false);
  const [wantPersonnel, setWantPersonnel] = useState(false);
  const [location, setLocation] = useState('');




  const dispatch = useDispatch();

  const snackTypes = [
    { type: 'water', quantity: 10, price: 1.5 },
    { type: 'soda', quantity: 20, price: 2.0 },
    { type: 'cack', quantity: 15, price: 1.0 }
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

  const handleSubmit = () => {
    const eventData = {
      eventName,
      startDate,
      startTime,
      hoursNumber: parseInt(hoursNumber),
      snacksType,
      snacksQuantity: parseInt(snacksQuantity),
      snacksPrice: parseFloat(snacksPrice),
      selectedTool,
      toolQuantity: parseInt(toolQuantity),
      toolPrice: parseFloat(toolPrice),
      selectedPersonnel,
      personnelQuantity: parseInt(personnelQuantity),
      personnelPrice: parseFloat(personnelPrice),
      location,
    };

    dispatch(createEvent(eventData));
  };

  return (
    
    <KeyboardAwareScrollView style={styles.container}>

      <Text style={styles.label}>Event Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Event Name"
        value={eventName}
        onChangeText={setEventName}
      />

      <Text style={styles.label}>Start Date:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Start Date"
        value={startDate}
        onChangeText={setStartDate}
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

      <Text style={styles.label}>Location:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Location"
        value={location}
        onChangeText={setLocation}
      />


      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={wantSnacks ? styles.radioButtonActive : styles.radioButtonInactive}
          onPress={() => setWantSnacks(!wantSnacks)}
        >
          <Text>{wantSnacks ? 'Snacks: Yes' : 'Snacks: No'}</Text>
        </TouchableOpacity>
      </View>
      {wantSnacks && <SnacksComponent snackTypes={snackTypes} />}


      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={wantTools ? styles.radioButtonActive : styles.radioButtonInactive}
          onPress={() => setWantTools(!wantTools)}
        >
          <Text>{wantTools ? 'Tools: Yes' : 'Tools: No'}</Text>
        </TouchableOpacity>
      </View>
      {wantTools && <ToolsComponent tools={tools} />}


      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={wantPersonnel ? styles.radioButtonActive : styles.radioButtonInactive}
          onPress={() => setWantPersonnel(!wantPersonnel)}
        >
          <Text>{wantPersonnel ? 'Personnel: Yes' : 'Personnel: No'}</Text>
        </TouchableOpacity>
      </View>
      {wantPersonnel && <PersonnelComponent personnel={personnel} />}



      <Button title="Submit" onPress={handleSubmit} />
    </KeyboardAwareScrollView>
  );

};

const styles = StyleSheet.create({
  wrapper: {},
  container: {
    padding: 20,
    marginTop: 20
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
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
    width:400
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
});

export default AddEvent;
