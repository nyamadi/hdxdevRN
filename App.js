import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigation/RootNavigator';
import { AuthProvider } from './provider/AuthProvider';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
         <RootNavigator/>
       </AuthProvider>
    </NavigationContainer>
  );
}
