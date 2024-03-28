import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const EventDetailsScreen = ({ route }) => {
  const { event } = route.params;

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Event Details</Text>
        <Text style={styles.eventName}>{event.eventName}</Text>
      </View>

      {/* Content */}
      <ScrollView style={styles.contentContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Event Information</Text>
          <Text>Start Date: {event.startDate}</Text>
          <Text>Start Time: {event.startTime}</Text>
          <Text>Hours Number: {event.hoursNumber}</Text>
        </View>

        {/* Personnel */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personnel</Text>
          {event.personnel.map((person, index) => (
            <View key={index}>
              <Text>{`Type: ${person.type}, Quantity: ${person.quantity} , Price: ${person.price}`}</Text>
            </View>
          ))}
        </View>

        {/* Tools */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tools</Text>
          {event.tools.map((tool, index) => (
            <View key={index}>
              <Text>{`type: ${tool.type}, Quantity: ${tool.quantity} , Price: ${tool.price}`}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3498db',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 10,
  },
  eventName: {
    fontSize: 18,
    color: '#fff',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default EventDetailsScreen;
