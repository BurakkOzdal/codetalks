import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './FloatingButton.style';

function FloatingButton({onPress, icon}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon name={icon} size={35} color="white" />
    </TouchableOpacity>
  );
}

export default FloatingButton;
