import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Quizz from '../screens/Quizz'
import { useNavigation } from '@react-navigation/native'

const checkResult = (input, drapeau) => {

    
    let verifInput = input.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    let verifDrapeau = drapeau.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    if (verifInput==verifDrapeau){
        return(true)
    }
    return false

  
  
}

export default checkResult

