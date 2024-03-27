import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const SnacksComponent = ({ snacks, onAddSnacks }) => {
    const [selectedSnack, setSelectedSnack] = useState('');
    const [snackQuantity, setSnackQuantity] = useState('');
    const [snackPrice, setSnackPrice] = useState('');
    const [selectedSnacks, setSelectedSnacks] = useState([]);

    useEffect(() => {
        if (snackQuantity !== '') {
            const selectedSnackInfo = snacks.find(item => item.type === selectedSnack);
            if (selectedSnackInfo) {
                const totalPrice = parseFloat(selectedSnackInfo.price) * parseInt(snackQuantity);
                setSnackPrice(totalPrice.toString());
            }
        }
    }, [snackQuantity, selectedSnack]);

    const handleAddSnack = () => {
        if (selectedSnack !== '' && snackQuantity !== '' && snackPrice !== '') {
            const newSnack = {
                type: selectedSnack,
                quantity: parseInt(snackQuantity),
                price: parseFloat(snackPrice)
            };
            setSelectedSnacks([...selectedSnacks, newSnack]);
            setSelectedSnack('');
            setSnackQuantity('');
            setSnackPrice('');
        }
    };

    useEffect(() => {
        onAddSnacks(selectedSnacks);
    }, [selectedSnacks]);

    return (
        <View>
            <Text style={styles.label}>Add Snacks:</Text>
            <View style={styles.selectContainer}>
                <Picker
                    selectedValue={selectedSnack}
                    onValueChange={(itemValue, itemIndex) => setSelectedSnack(itemValue)}
                    style={styles.selectInput}
                >
                    <Picker.Item label="Select Snack Type" value="" />
                    {snacks.map((snack, index) => (
                        <Picker.Item key={index} label={snack.type} value={snack.type} />
                    ))}
                </Picker>
            </View>

            <Text style={styles.label}>Snack Quantity:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Snack Quantity"
                value={snackQuantity}
                onChangeText={setSnackQuantity}
                keyboardType="numeric"
            />

            <Text style={styles.label}>Snack Price:</Text>
            <TextInput
                style={styles.input}
                placeholder="Snack Price"
                value={snackPrice + '$'}
                onChangeText={setSnackPrice}
                keyboardType="numeric"
                editable={false}
            />

            {selectedSnacks.map((snack, index) => (
                <View key={index}>
                    <Text>{`Type: ${snack.type}, Quantity: ${snack.quantity}, Price: ${snack.price + '$'}`}</Text>
                </View>
            ))}

            <Button title="Add Snack" onPress={handleAddSnack} />
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

export default SnacksComponent;
