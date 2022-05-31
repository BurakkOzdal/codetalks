import React from 'react';
import {TouchableOpacity,Text} from 'react-native';
import styles from "./RoomCard.style"

function RoomCard({title}) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default RoomCard;
