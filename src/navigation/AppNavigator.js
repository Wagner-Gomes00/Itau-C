import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from '../screens/FirstScreen';
import LoginScreen from '../screens/LoginScreen'; 
import SecondScreen from '../screens/SecondScreen';
import PixScreen from '../screens/PixScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName="FirstScreen">
            <Stack.Screen
                name="FirstScreen"
                component={FirstScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="LoginScreen" 
                component={LoginScreen}
                options={{ title: 'Digite a Senha' }} 
            />
            <Stack.Screen
                name="SecondScreen"
                component={SecondScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="PixScreen"
                component={PixScreen}
                options={{ title: 'Pix e Transferir' }}
            />
        </Stack.Navigator>
    );
}
