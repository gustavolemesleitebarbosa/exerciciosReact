import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Simples from './componentes/Simples'
import ParOuImpar from './componentes/ParOuImpar'
import { Inverter, MegaSena } from './componentes/Multi'
import Contador from './componentes/Multi'

export default class App extends Component {
  render () {
    return (
      < View style={styles.container}>
        <Simples texto='flexivel!!'></Simples>
        <ParOuImpar numero={3644} />
        <Inverter texto='React nativo'></Inverter>
        <MegaSena numeros={7}></MegaSena>
        <Contador numero={9}></Contador>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  f20: {
    fontSize: 20
  }

})
