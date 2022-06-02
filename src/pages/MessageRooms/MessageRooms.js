import React,{useEffect} from 'react';
import {View, FlatList} from 'react-native';
import CFloatingButton from '../../components/FloatingButton';
import RoomCard from '../../components/RoomsCard/RoomCard';
import CModal from '../../components/Modal';
import styles from './MessageRooms.style';
import database from '@react-native-firebase/database';
import parseContentData from '../../utils/parseContentData';

function MessageRooms({navigation}) {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [contentList, setContentList] = React.useState([]);

  useEffect(() => {
    database()
      .ref('/rooms/')
      .on('value', snapshot => {
        const contentData = snapshot.val();

        const parsedData = parseContentData(contentData || {});
        setContentList(parsedData);
      });
  }, []);

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

    console.log(contentObject);
    database().ref('/rooms').push(contentObject);
  };

  const renderData = ({item}) => {
    return <RoomCard title={item.roomName} navigation={navigation} id={item.id}/>;
  };

  return (
    <View style={styles.container}>
      <FlatList data={contentList} renderItem={renderData} numColumns={2} />
      <CFloatingButton icon={'plus'} onPress={handleModalToggle} />
      <CModal
        visible={isModalVisible}
        onClose={handleModalToggle}
        onSend={handleRoomContent}
        placeholder="Oda adı giriniz..."
      />
    </View>
  );
}
export default MessageRooms;
