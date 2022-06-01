import React from 'react';
import {View, FlatList} from 'react-native';
import CFloatingButton from '../../components/FloatingButton';
import RoomCard from '../../components/RoomsCard/RoomCard';
import CModal from '../../components/Modal';
import styles from './MessageRooms.style';
import database from '@react-native-firebase/database';

function MessageRooms({navigation}) {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const data = [
    {
      title: 'react',
    },
    {
      title: 'java',
    },
    {
      title: 'react',
    },
    {
      title: 'java',
    },
    {
      title: 'react',
    },
    {
      title: 'java',
    },
  ];

  const handleModalToggle = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleRoomContent = content => {
    handleModalToggle();
    console.log(content);
    sendRoom(content);
  };

  const sendRoom = content => {
    const contentObject = {
      roomName: content,
      date: new Date().toString(),
    };

    console.log(contentObject)
    database().ref('/rooms').push(contentObject);
  };

  const renderData = ({item}) => {
    return <RoomCard title={item.title} navigation={navigation} />;
  };

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderData} numColumns={2} />
      <CFloatingButton icon={'plus'} onPress={handleModalToggle} />
      <CModal
        visible={isModalVisible}
        onClose={handleModalToggle}
        onSend={handleRoomContent}
      />
    </View>
  );
}
export default MessageRooms;
