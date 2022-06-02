import React,{useState} from 'react'
import { View, Text } from 'react-native'
import MessageCard from '../../components/MessageCard';
import CFloatingButton from "../../components/FloatingButton"
import CModal from "../../components/Modal"
import styles from "./MessageRoom.style"

function MessageRoom({route}) {
    const [isModalVisible,setIsModalVisible]=useState(false)
    const {roomId}=route.params
    const {title}=route.params

    function handleModalToggle() {
        setIsModalVisible(!isModalVisible)
    }

    return(
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <Text style={styles.title}>{title} odası kuruldu!</Text>
            </View>
            <MessageCard/>
            <CFloatingButton icon={"plus"} onPress={handleModalToggle}/>
            <CModal visible={isModalVisible} onClose={handleModalToggle} placeholder="Yorum yaz..."/>
        </View>
    )
}

export default MessageRoom;