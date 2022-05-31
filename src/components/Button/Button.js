import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from "./Button.style";

function Button({title, onPress,theme="primary"}) {
    return(
        <TouchableOpacity onPress={onPress} style={styles[theme].container}>
            <Text style={styles[theme].title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button