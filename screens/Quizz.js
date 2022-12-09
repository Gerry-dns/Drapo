import { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import axios from 'axios'


const Quizz = ({navigation}) => {

  const [data, setData] = useState([])
  // const [flags, setFlags] = useState([])

  useEffect(()=>{
    // axios.get("https://restcountries.com/v3.1/all").then((res)=>setData(res.data))
    axios.get("https://restcountries.com/v3.1/all").then((res)=>setData(res.data))
  },[])



  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.parent}>
      <View style={styles.top}>
        <Text style={styles.question}>Quel est ce pays ?</Text>
      </View>
      <View>
        <View>
        {
          data.map((country, index) =><Image key = {index}>{country.flags.svg}</Image>)
        }
        </View>
     
     
        {/* <Image
          style={styles.flag1}
          source={require('../assets/zimbabwe.jpg')}
        /> */}
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.optionButtom} onPress={()=>navigation.navigate("Fail")}>
            <Text style={styles.option} >Tchad</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButtom}>
            <Text  style={styles.option}>Roumanie</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButtom} onPress={()=>navigation.navigate("Result")}>
            <Text  style={styles.option}>Zimbabwe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButtom}>
            <Text  style={styles.option}>Indonésie</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Result")}> 
            <Text style={styles.buttonEnd}>OK</Text>
        </TouchableOpacity>
      </View>
      </View>
  
    </View>
    </ScrollView>
  )
}



const styles = StyleSheet.create({
    container: {
        padding: 40, 
        paddingHorizontal: 20,  
        height : '100%',
        
    },
    top: {
        marginVertical: 16,
        alignItems: 'center',
        fontWeight: '200  ',
    },

    flag1: {
      height:200,
      width: '100%',
    },
    options: {
        marginVertical: 16,
        flex: 1, 
    },

    bottom: { 
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    button: {
      backgroundColor: '#1A759F',
      padding: 12,
      paddingHorizontal: 16, 
      alignItems: 'center',
      marginBottom: 0,
    },

    buttonText: {
      fontSize: 18,
      fontWeight: '600',
      color: 'white',
    },
    buttonEnd: {
      fontSize: 18,
      fontWeight: '600',
      color: 'white',
    },
    question: {
      fontSize: 28,

    },
    option: {
      fontSize: 18,
      fontWeight: '500',
      color: 'white',
    },
    optionButtom:{
      paddingVertical: 12,
      marginVertical: 6,
      backgroundColor: '#34A0A4',
      paddingHorizontal: 12,
      borderRadius: 12, 
      alignItems: 'center',
    },

    parent: {
      height : '100%',
    }
    
})
export default Quizz;