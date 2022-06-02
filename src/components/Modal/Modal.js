import React from 'react';
import {TextInput, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import Button from '../Button';
import styles from './Modal.style';

function Modal({visible, onClose, onSend, placeholder}) {
  const [text, setText] = React.useState(null);

  const handleText = () => {
    if (!text) {
      return;
    }
    onSend(text);
    setText();
  };

  return (
    <ReactNativeModal
      style={styles.modal}
      swipeDirection={'down'}
      visible={visible}
      onSwipeComplete={onClose}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}>
      <View style={styles.container}>
        <View style={styles.input_container}>
          <TextInput
            placeholder={placeholder}
            onChangeText={setText}
            multiline
          />
        </View>

        <Button title={'Oda Aç'} onPress={handleText} />
      </View>
    </ReactNativeModal>
  );
}
export default Modal;
