import { View, Text, TextInput, StyleSheet, Button  } from 'react-native'
import React, { useState } from 'react';
import Picker from'@react-native-picker/picker'



const AddEvent = () => {


  
  
    return (
        <View style={styles.container}>
        <Text style={styles.label}>Event Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Event Name"
          
        />
  
        <Text style={styles.label}>Event Type:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Event Type"
          
        />
  
        <Text style={styles.label}>Select Date:</Text>
        <TextInput
          style={styles.input}
          placeholder="Select Date"
         
        />
        <Text style={styles.label}>Select Date:</Text>
        <TextInput
          style={styles.input}
          placeholder="Select Date"
         
        />
        <Text style={styles.label}>Select Date:</Text>
        <TextInput
          style={styles.input}
          placeholder="Select Date"
         
        />
  
        <Button title="Submit" />
  
      </View>
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