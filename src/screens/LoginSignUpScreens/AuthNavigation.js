import React from 'react'
import { View } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from './Welcome';
import SignUp from './SignUp';
import Login from './Login';
import HomeScreen from '../HomeScreen';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

    </Stack.Navigator>
  );
}

export default AuthNavigation