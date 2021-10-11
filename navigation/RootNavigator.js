import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InterviewScreen from '../screens/InterviewScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {

   

return(
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="InterviewScreen">  
         <Stack.Screen name="InterviewScreen" component={InterviewScreen} />
    </Stack.Navigator>
);

}

export default RootNavigator;