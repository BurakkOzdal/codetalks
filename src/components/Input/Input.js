import React from 'react'
import { View, TextInput } from 'react-native'
import styles from "./Input.style";


function Input({placeholder, value, onChangeText, isSecure}) {
    return(
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={placeholder} value={value} onChangeText={onChangeText} secureTextEntry={isSecure} />
        </View>
    )
}
export default Input