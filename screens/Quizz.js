import { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, TextInput, Button } from 'react-native'
// on importe Axios qui nous permet de nous connecter à une API externe
import axios from 'axios'
import checkResult from '../components/checkResult'

const Quizz = ({navigation}) => {
  const [reponse, setReponse] = useState()
  const [data, setData] = useState([])
  // const [flags, setFlags] = useState([])

  useEffect(()=>{
    // on vient récupérer la totalité de l'API 
    axios.get("https://restcountries.com/v3.1/all").then((res)=>
    // on stock la recherche dans une variable qui contient un tableau vide
    {let temp = [];
    // la recherche est stockée dans une variable
    let dataAPI = res.data;
    // itération est égal à 0
    let i = 0;
    // création d'une boucle 'tant que' on va chercher 1 drapeau aléatoire
    while (i < 1) {
        // on va générer un drapeau aléatoirement grâce à Math Random multiplié par la longeur de la variable dataApi (qui est le résultat de la recherche)
        let num = Math.floor(Math.random() * dataAPI.length);

        let valueState =
        temp.map((item) => {
            if (item !== dataAPI[num]) {
            return false;
            }
        }) | true;
        // on vérifie que le format est bien en png
        if (valueState && dataAPI[num].flags.png !== undefined) {
        let path = dataAPI[num].flags.png;
        let str = dataAPI[num].translations.fra.common;
        // ensuite on push le drapeau et
        temp.push({
            path: path,
            pays: str,
        });
        i++;
        }
    }
    setData(temp);})
  },[])



  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.parent}>
        <View style={styles.top}>
            <Text style={styles.question}>Quel est ce pays ?</Text>
        </View>
          <View style={styles.flagContainer}>
            {
              data.map((country, index) =><Image style={styles.flag} source={{uri:country.path}} key = {index}/>)
            }
          </View>
      </View>
      <TextInput 
        style={styles.textInput}
        placeholder="Votre réponse"
        onChangeText={(valeur)=>{setReponse(valeur); console.log(data[0].pays);}}
        />
        <Button title='valider' 
        onPress={()=> 
          {if(checkResult(reponse, data[0].pays)==true) {
          navigation.navigate('Result')
        } else {
          navigation.navigate('Fail')
          }}}></Button>
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
    options: {
        marginVertical: 16,
        flex: 1, 
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

    flag: {
      width: '100%',
      height: 300,
    },

    textInput: {
      marginTop: 30,
      backgroundColor: 'grey',
      height: 50,
      fontSize: 30,
    },
    bouttonValider: {
      alignItems: 'center',
      marginTop: 80,
      borderRadius: 100,
      backgroundColor: '#1A759F',
      
    },
    buttonTextValider : {
      
      fontSize: 30,
      color: 'white'
    },

    
})
export default Quizz;