import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Fail = ({navigation}) => {
  return (
    
      <View>
        <View style={styles.bannerContainer}>
          <Text style={styles.dommageText}>Dommage !</Text>
        </View> 
        <View>
          <Image
            style={styles.PictureFail}
            source={require('../assets/fail.gif')}
          />
        </View>
        <View style={styles.bouttonsFail}>
        <TouchableOpacity style={styles.nouvelleEssaiBoutton}   onPress={()=>navigation.navigate("Quizz")}>
            <Text style={styles.textNouvelleEssai}>Nouvel essaie</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.abandonBoutton}  onPress={()=>navigation.navigate("Home")}>
            <Text style={styles.textAbandon}>J'abandonne</Text>
          </TouchableOpacity>
        </View>
        <View>
       
        </View>
      </View>
    

  )
}

export default Fail

const styles = StyleSheet.create({

  bannerContainer: {
    marginTop: 0,
    alignItems: 'center',
  },
  dommageText: {
    fontSize: 50,
  },
  PictureFail: {
    width: '100%',
    height: '80%',
  }, 
  bouttonsFail: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
  },

  nouvelleEssaiBoutton: {
    alignItems: 'center',
    backgroundColor: '#34A0A4',
    width: '45%',
    borderRadius: 100,
  },

  nouvelleEssaiBoutton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#34A0A4',
    width: '45%',
    borderRadius: 100,
  },

  textNouvelleEssai: {
    fontSize: 20,
    color: 'white',
    
  },

  abandonBoutton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#34A0A4',
    width: '40%',
    borderRadius: 100,

  },

  textAbandon: {
    fontSize: 20,
    color: 'white'
  },
})