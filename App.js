

import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import Quizz from './screens/Quizz';
import Home from './screens/home';
import Result from './screens/result';
import MyStack from './navigation';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
return (

      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
    
    
  );
};
export default App; 

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  }

});
