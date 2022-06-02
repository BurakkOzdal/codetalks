import React from 'react';
import {TouchableOpacity,Text} from 'react-native';
import styles from "./RoomCard.style"

function RoomCard({title, navigation,id}) {
  
  function handleRoom() {
    navigation.navigate("MRoomPage",{roomId:id,title:title})
  }

  return (
    <TouchableOpacity onPress={handleRoom} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default RoomCard;
