import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import Title from '../components/title'


const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Title/>
            <View style={styles.bannerContainer}>
            <Image
        style={styles.logo}
        source={require('../assets/logo.png')}
      />
            </View>
            <TouchableOpacity 
                onPress={()=> navigation.navigate("Quizz")} 
                style={styles.button}>
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>
    
    );
};

export default Home;

const styles = StyleSheet.create({
    banner:{
        height: 300,
        widht: 300,
    },

    bannerContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    logo: {
        width: '100%',
        height: '70%',
        borderRadius: 100,
    },
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',
        backgroundColor : '#ece9df',
    },
    button:{
        width: '100%',
        backgroundColor: '#1A759F',
        padding: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 24, 
        fontWeight: '600',
        color: 'white',


    }
});

