import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';
import {StatusBar} from 'react-native';

//pages
import Login from './pages/auth/Login';
import Sign from './pages/auth/Sign';
import MRoom from './pages/MessageRoom';
import MRooms from './pages/MessageRooms';
import colors from './styles/color';

const Stack = createNativeStackNavigator();
function App() {
  const AuthStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          component={Login}
          name="LoginPage"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Sign}
          name="SignPage"
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };

  const MessageStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          component={MRooms}
          name="MRoomsPage"
          options={{
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: colors.secondaryOrange},
            headerTintColor: 'white',
            headerTitle: 'Odalar',
          }}
        />
        <Stack.Screen
          component={MRoom}
          name="MRoomPage"
          options={{
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: colors.secondaryOrange},
            headerTintColor: 'white',
            headerTitle: 'Oda',
          }}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.primaryOrange} />

      <Stack.Navigator>
        <Stack.Screen
          component={MessageStack}
          name="MessageStack"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={AuthStack}
          name="AuthStack"
          options={{headerShown: false}}
        />
      </Stack.Navigator>

      <FlashMessage position="top" />
    </NavigationContainer>
  );
}

export default App;
