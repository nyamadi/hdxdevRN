import React from 'react';
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
