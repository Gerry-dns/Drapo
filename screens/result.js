import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Result = ({navigation}) => {
  return (
    
      <View>
        <View style={styles.bannerContainer}>
          <Text style={styles.bravo}>Bravo</Text>
        </View> 
        <View>
          <Image
            style={styles.PictureBravo}
            source={require('../assets/bravo.gif')}
          />
        </View>
        <View>
        <TouchableOpacity onPress={()=>navigation.navigate("Quizz")}>
            <Text>Nouvelle essaie</Text>
          </TouchableOpacity>
        </View>
      </View>
    

  )
}

export default Result

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },

  bannerContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bravo: {
    fontSize: 50,
  },
  PictureBravo: {
    width: '100%',
    height: '80%',

  }, 
  container: {
    paddingTop: 40, 
    paddingHorizontal: 20,
    height: '100%',
  }
})