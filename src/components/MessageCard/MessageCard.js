import React from 'react'
import { View, Text} from 'react-native'
import styles from "./MessageCard.style"

function MessageCard() {

    return(
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <Text style={styles.title}>Username</Text>
                <Text style={styles.date}>Date</Text>
            </View>
            <Text style={styles.message}>Message</Text>
        </View>
    )
}

export default MessageCard;