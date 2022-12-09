import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Fail = ({navigation}) => {
  return (
    
      <View>
        <View style={styles.bannerContainer}>
          <Text style={styles.fail}>Dommage !</Text>
        </View> 
        <View style={styles.failContainer}>
          <Image
            style={styles.PictureFail}
            source={require('../assets/fail.gif')}
          />
        </View>
        <View>
        <TouchableOpacity style={styles.retryContainer} onPress={()=>navigation.navigate("Quizz")}>
            <Text style={styles.textRetry}>Nouvelle essaie</Text>
        </TouchableOpacity>
        </View>
      </View>
    

  )
}

export default Fail

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },

  bannerContainer: {
    marginTop: 20,
    alignItems: 'center',
  },

  fail: {
    fontSize: 50,
  },
  PictureFail: {
    width: '100%',
    height: '80%',
  }, 

  retryContainer: {
    alignItems: 'center',
    backgroundColor: '#34A0A4',
    width: '100%',
    borderRadius: 100,
  },

  textRetry: {
    fontSize: 30,
  }
})