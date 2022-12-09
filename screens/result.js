import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Result = ({navigation}) => {
  return (
      <View>
        <View style={styles.bannerContainer}>
          <Text style={styles.bravoText}>Bravo</Text>
        </View> 
        <View>
          <Image
            style={styles.PictureBravo}
            source={require('../assets/bravo.gif')}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.encoreBoutton} onPress={()=>navigation.navigate("Quizz")}>
              <Text style={styles.encoreText}>Encore !</Text>
          </TouchableOpacity>
        </View>
      </View>
  )
}

export default Result

const styles = StyleSheet.create({

  bannerContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  bravoText: {
    fontSize: 50,
  },
  PictureBravo: {
    width: '100%',
    height: '70%',
    marginTop: 20,
  }, 
  encoreBoutton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    
  },

  encoreText: {
    color: 'white',
    backgroundColor: 'green',
    borderRadius : 100, 
    width: '100%'
  }
})