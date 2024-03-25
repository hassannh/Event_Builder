import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const EventCard = ({ event }) => {
    return (
        <TouchableOpacity style={styles.card}>
            <Image
                // source={event.image}
                style={styles.cardImage}
                resizeMode="cover"
            />
            <View style={styles.cardContent}>
                <Text style={styles.eventName}> event name</Text>
                <Text style={styles.eventDate}>event.date</Text>
                <Text style={styles.eventLocation}>event.location</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        margin: 10,
        marginTop: 50,
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
});

export default EventCard;
