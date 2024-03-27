import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const PersonnelComponent = ({ personnel, onAddPersonnel }) => {
    const [selectedPersonnel, setSelectedPersonnel] = useState('');
    const [personnelQuantity, setPersonnelQuantity] = useState('');
    const [personnelPrice, setPersonnelPrice] = useState('');
    const [selectedPersonnels, setSelectedPersonnels] = useState([]);

    useEffect(() => {
        if (personnelQuantity !== '') {
            const selectedPersonnelInfo = personnel.find(item => item.type === selectedPersonnel);
            if (selectedPersonnelInfo) {
                const totalPrice = parseFloat(selectedPersonnelInfo.price) * parseInt(personnelQuantity);
                setPersonnelPrice(totalPrice.toString());
            }
        }
    }, [personnelQuantity, selectedPersonnel]);

    const handleAddPersonnel = () => {
        if (selectedPersonnel !== '' && personnelQuantity !== '' && personnelPrice !== '') {
            const newPersonnel = {
                type: selectedPersonnel,
                quantity: parseInt(personnelQuantity),
                price: parseFloat(personnelPrice)
            };
            setSelectedPersonnels([...selectedPersonnels, newPersonnel]);
            setSelectedPersonnel('');
            setPersonnelQuantity('');
            setPersonnelPrice('');
        }
    };

    useEffect(() => {
        onAddPersonnel(selectedPersonnels);
    }, [selectedPersonnels]);

    return (
        <View>
            <Text style={styles.label}>Add Personnel:</Text>
            <View style={styles.selectContainer}>
                <Picker
                    selectedValue={8}
                    onValueChange={(itemValue, itemIndex) => setSelectedPersonnel(itemValue)}
                    style={styles.selectInput}
                >
                    <Picker.Item label="Select Personnel Type" value="" />
                    {personnel.map((person, index) => (
                        <Picker.Item key={index} label={person.type} value={person.type} />
                    ))}
                </Picker>
            </View>

            <Text style={styles.label}>Personnel Quantity:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Personnel Quantity"
                value={personnelQuantity}
                onChangeText={setPersonnelQuantity}
                keyboardType="numeric"
            />

            <Text style={styles.label}>Personnel Price:</Text>
            <TextInput
                style={styles.input}
                placeholder="Personnel Price"
                value={personnelPrice + '$'}
                onChangeText={setPersonnelPrice}
                keyboardType="numeric"
                editable={false}
            />

            {selectedPersonnels.map((personnel, index) => (
                <View key={index}>
                    <Text>{`Type: ${personnel.type}, Quantity: ${personnel.quantity}, Price: ${personnel.price + '$'}`}</Text>
                </View>
            ))}

            <Button title="Add Personnel" onPress={handleAddPersonnel} />
        </View>
    );
};

const styles = StyleSheet.create({
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
    selectContainer: {
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
    },
    selectInput: {
        height: 40,
        paddingLeft: 10,
    },
});

export default PersonnelComponent;
