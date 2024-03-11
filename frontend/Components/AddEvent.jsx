import { View, Text, TextInput, StyleSheet, Button, ScrollView } from 'react-native'
import React, { useState } from 'react';
import Picker from '@react-native-picker/picker'
import SelectInput from './SelectInput';



const AddEvent = () => {


  const [selectedValue, setSelectedValue] = useState("option1");


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Event Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Event Name"

      />

      <Text style={styles.label}>Day Date:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Day Date"

      />

      <Text style={styles.label}>Start Time:</Text>
      <TextInput
        style={styles.input}
        placeholder="Select Time"

      />
      <Text style={styles.label}>Hours Number:</Text>
      <TextInput
        style={styles.input}
        placeholder="Select Date"

      />
      <Text style={styles.label}>snacks Type:</Text>
      <TextInput
        style={styles.input}
        placeholder="snacksType"

      />

      <Text style={styles.label}>price:</Text>
      <TextInput
        style={styles.input}
        placeholder="price"

      />

      <Text style={styles.label}>location:</Text>
      <SelectInput/>

    

      <Button title="Submit" />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
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
});

export default AddEvent