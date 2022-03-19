import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


//pages
import Login from "./pages/auth/Login";
import Sign from "./pages/auth/Sign";
import MRoom from "./pages/MessageRoom";
import MRooms from "./pages/MessageRooms";
import FlashMessage from "react-native-flash-message";


const Stack = createNativeStackNavigator();
function App() {

  const AuthStack = () => {
    return (
      <Stack.Navigator >
        <Stack.Screen component={Login} name="LoginPage" options={{ headerShown: false }} />
        <Stack.Screen component={Sign} name="SignPage" />
      </Stack.Navigator>
    )
  }

  const MessageStack = () => {
    return (
      <Stack.Navigator >
        <Stack.Screen component={MRooms} name="MRoomsPage" />
        <Stack.Screen component={MRoom} name="MRoomPage" />
      </Stack.Navigator>
    )
  }


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={AuthStack} name="AuthStack" options={{ headerShown: false }} />
        <Stack.Screen component={MessageStack} name="MessageStack" options={{ headerShown: false }} />
      </Stack.Navigator>
      
      <FlashMessage position="top"/>
    </NavigationContainer>
  )
}

export default App;