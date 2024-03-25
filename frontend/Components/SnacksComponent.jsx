import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const SnacksComponent = ({ snackTypes }) => {
    const [snacksType, setSnacksType] = useState('');
    const [snacksQuantity, setSnacksQuantity] = useState('');
    const [snacksPrice, setSnacksPrice] = useState('');
    const [selectedSnacks, setSelectedSnacks] = useState([]);

    useEffect(() => {
        // Calculate snacks price
        if (snacksQuantity !== '') {
            const snack = snackTypes.find(item => item.type === snacksType);
            if (snack) {
                const totalPrice = parseFloat(snack.price) * parseInt(snacksQuantity);
                setSnacksPrice(totalPrice.toString());
            }
        }
    }, [snacksQuantity, snacksType]);

    const handleAddSnack = () => {
        if (snacksType !== '' && snacksQuantity !== '' && snacksPrice !== '') {
            const newSnack = {
                type: snacksType,
                quantity: parseInt(snacksQuantity),
                price: parseFloat(snacksPrice)
            };
            setSelectedSnacks([...selectedSnacks, newSnack]);
            setSnacksType('');
            setSnacksQuantity('');
            setSnacksPrice('');
        }
    };

    return (
        <View>
            <Text style={styles.label}>Add Snack:</Text>
            <View style={styles.selectContainer}>
                <Picker
                    selectedValue={snacksType}
                    onValueChange={(itemValue, itemIndex) => setSnacksType(itemValue)}
                    style={styles.selectInput}
                >
                    <Picker.Item label="Select Snacks Type" value="" />
                    {snackTypes.map((snack, index) => (
                        <Picker.Item key={index} label={snack.type} value={snack.type} />
                    ))}
                </Picker>
            </View>

            <Text style={styles.label}>Snacks Quantity:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Snacks Quantity"
                value={snacksQuantity}
                onChangeText={setSnacksQuantity}
                keyboardType="numeric"
            />

            <Text style={styles.label}>Snacks Price:</Text>
            <TextInput
                style={styles.input}
                placeholder="Snacks Price"
                value={snacksPrice}
                onChangeText={setSnacksPrice}
                keyboardType="numeric"
                editable={false}
            />

            <Button title="Add Snack" onPress={handleAddSnack} />

            {selectedSnacks.map((snack, index) => (
                <View key={index}>
                    <Text>{`Type: ${snack.type}, Quantity: ${snack.quantity}, Price: ${snack.price}`}</Text>
                </View>
            ))}
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
