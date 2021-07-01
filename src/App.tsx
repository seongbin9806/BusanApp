import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NotificationsScreen from '~/screens/notifications';
import Inquiries from '~/screens/inquiries';
import Home from '~/screens/mainScreen';
import {UserContextProvider} from '~/Context/User';

const Stack = createStackNavigator();
const App = () => {

  return (
    <UserContextProvider>
      <NavigationContainer>
        <Stack.Navigator  initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options = {{headerShown: false}} />
          <Stack.Screen name="notifications" component={NotificationsScreen} options = {{ title: '알림확인'}} />
          <Stack.Screen name="inquiries" component={Inquiries} options = {{ title: '이용문의'}} />        
        </Stack.Navigator>
      </NavigationContainer>
    </UserContextProvider>
  );  
}

export default App; 