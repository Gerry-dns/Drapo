import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import Title from '../components/title'


const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Title/>
            <View style={styles.bannerContainer}>
                <Image source={{uri: 'https://img.freepik.com/vecteurs-libre/icone-drapeau-insigne-realiste-sertie-differentes-couleurs-drapeaux-illustration-badges-plastique_1284-29323.jpg?w=1380&t=st=1670505958~exp=1670506558~hmac=36790f8de15df3f180a9e8284816229a472df664a5c473ef61babf34bb6610d8'}}
                style={styles.banner}
                resizeMode="contain"/>
                
                
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
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%',
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

