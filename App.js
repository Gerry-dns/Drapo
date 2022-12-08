

import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Quizz from './screens/Quizz';
import Home from './screens/home';
import Result from './screens/result';
import MyStack from './navigation';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
//Liason de l'api
const [data, setData] = useState([]);

useEffect(()=> {
  axios.get("https://restcountries.com/v3.1/all").then((res)=>
      setData(res.data)
  ).catch( (res)=>
      console.log("error")
  )
},[])
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
