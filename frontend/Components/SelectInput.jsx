import { View, Text } from 'react-native'
import React from 'react'
import RNPickerSelect from 'react-native-picker-select';

const SelectInput = () => {
    return (
        <View>
            <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: 'Football', value: 'football' },
                    { label: 'Baseball', value: 'baseball' },
                    { label: 'Hockey', value: 'hockey' },
                ]}
            />
        </View>
    )
}

export default SelectInput