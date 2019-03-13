import React from 'react'
import { Button, Alert, ToastAndroid, Platform } from 'react-native'


export default props => {
    const notificar = msg => {
        if (Platform.OS == 'android'){
            ToastAndroid.show(msg,ToastAndroid.LONG)
        }
        else {
            Alert.alert('Informacao',msg)
        }
    }

    return (<Button title='Plataforma?'
        onPress={()=> notificar('Parabens')}></Button>
    )
}