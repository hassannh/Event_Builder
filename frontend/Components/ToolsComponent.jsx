import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ToolsComponent = ({ tools, onAddTools }) => {
    const [ToolType, setToolType] = useState('');
    const [toolQuantity, setToolQuantity] = useState('');
    const [toolPrice, setToolPrice] = useState('');
    const [selectedTools, setSelectedTools] = useState([]);

    useEffect(() => {
        if (toolQuantity !== '') {
            const selectedToolInfo = tools.find(item => item.type === ToolType);
            if (selectedToolInfo) {
                const totalPrice = parseFloat(selectedToolInfo.price) * parseInt(toolQuantity);
                setToolPrice(totalPrice.toString());
            }
        }
    }, [toolQuantity, ToolType]);

    const handleAddTool = () => {
        if (ToolType !== '' && toolQuantity !== '' && toolPrice !== '') {
            const newTool = {
                type: ToolType,
                quantity: parseInt(toolQuantity),
                price: parseFloat(toolPrice)
            };
            setSelectedTools([...selectedTools, newTool]);
            onAddTools([...selectedTools, newTool]);
            setToolType('');
            setToolQuantity('');
            setToolPrice('');
        }
    };

    useEffect(() => {
        onAddTools(selectedTools);
    }, [selectedTools]);

    return (
        <View>
            <Text style={styles.label}>Add Tool:</Text>
            <View style={styles.selectContainer}>
                <Picker
                    selectedValue={ToolType}
                    onValueChange={(itemValue, itemIndex) => setToolType(itemValue)}
                    style={styles.selectInput}
                >
                    <Picker.Item label="Select Tool Type" value="" />
                    {tools.map((tool, index) => (
                        <Picker.Item key={index} label={tool.type} value={tool.type} />
                    ))}
                </Picker>
            </View>

            <Text style={styles.label}>Tool Quantity:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Tool Quantity"
                value={toolQuantity}
                onChangeText={setToolQuantity}
                keyboardType="numeric"
            />

            <Text style={styles.label}>Tool Price:</Text>
            <TextInput
                style={styles.input}
                placeholder="Tool Price"
                value={toolPrice}
                onChangeText={setToolPrice}
                keyboardType="numeric"
                editable={false}
            />

            <Button title="Add Tool" onPress={handleAddTool} />

            {selectedTools.map((tool, index) => (
                <View key={index}>
                    <Text>{`Type: ${tool.type}, Quantity: ${tool.quantity}, Price: ${tool.price}`}</Text>
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

export default ToolsComponent;
