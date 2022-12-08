import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Countries from '../Countries';


const Quizz = ({navigation}) => {
  const [questions, setQuestions] = useState();
  const [ques, setQues]= useState(0)
  const getQuizz=async()=>{
    const url='https://opentdb.com/api.php?amount=10&type=multiple';
    const res= await fetch(url);
    const data= await res.json();
    setQuestions(data.results);


  }
  useEffect(()=>{
      getQuizz()
  }, [])
  return (
    <View style={styles.container}>
    {questions && (
      <View style={styles.parent}>
      <View style={styles.top}>
        <Text style={styles.question}>Trouver le pays</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.optionButtom}>
            <Text style={styles.option}>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButtom}>
            <Text  style={styles.option}>Option 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButtom}>
            <Text  style={styles.option}>Option 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButtom}>
            <Text  style={styles.option}>Option 4</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonNext}>NEXT</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Result")}> 
            <Text style={styles.buttonEnd}>END</Text>
        </TouchableOpacity>
      </View>
      </View>
  )}
    </View>
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
      marginBottom: 30,
    },

    buttonText: {
      fontSize: 18,
      fontWeight: '600',
      color: 'white',
    },

    buttonNext: {
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
    },

    parent: {
      height : '100%',
    }
    
})
export default Quizz;