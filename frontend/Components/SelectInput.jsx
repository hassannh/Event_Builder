import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import RNPickerSelect from 'react-native-picker-select';

const SelectInput = () => {
    return (
        <View style={styles.input}>
            <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: 'Royal_Room', value: 'Royal_Room' },
                    { label: 'open space', value: 'open space' },
                    { label: 'gardens', value: 'gardens' },
                ]}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 20,
      paddingLeft: 10,
      justifyContent:'center'
    },
  });

export default SelectInput