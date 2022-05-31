import React from 'react';
import {View, FlatList} from 'react-native';
import RoomCard from '../../components/RoomsCard/RoomCard';

function MessageRooms() {
  const data = [
    {
        title:"react"
    },
    {
        title:"java"
    },
    {
        title:"react"
    },
    {
        title:"java"
    },
    {
        title:"react"
    },
    {
        title:"java"
    },
];

  const renderData = ({item}) => {
    return <RoomCard title={item.title} />;
  };


  return (
    <View>
      <FlatList data={data} renderItem={renderData} numColumns={2}/>
    </View>
  );
}
export default MessageRooms;
