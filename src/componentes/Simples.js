import React from 'react'
import { View, Text } from 'react-native'
import Padrao from '../estilos/Padrao'

export default props => <View>
                          <Text style={Padrao.ex}>
                            A:
                            {props.texto}
                          </Text>
 </View>
