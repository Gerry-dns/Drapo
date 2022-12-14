import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import quizz from '../screens/Quizz';
import Result from '../screens/result';
import Fail from '../screens/Fail';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Quizz" component={quizz} />
      <Stack.Screen name="Result" component={Result} />
      <Stack.Screen name="Fail" component={Fail}/>
     
    </Stack.Navigator>
  );
}

export default MyStack; 