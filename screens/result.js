import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Result = ({navigation}) => {
  return (
    <View>
      <Text>Voici les résulats</Text>
      <View style={styles.bannerContainer}>
      <Image source={{uri:'https://img.freepik.com/vecteurs-libre/icone-drapeau-insigne-realiste-sertie-differentes-couleurs-drapeaux-illustration-badges-plastique_1284-29323.jpg?w=1380&t=st=1670505958~exp=1670506558~hmac=36790f8de15df3f180a9e8284816229a472df664a5c473ef61babf34bb6610d8'}}
                style={styles.banner}
                resizeMode="contain"/>
      </View> 
        <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
          <Text>Home</Text>
        </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    paddingTop: 40, 
    paddingHorizontal: 20,
    height: '100%',
  }
})