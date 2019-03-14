import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import Simples from './componentes/Simples'
import ParOuImpar from './componentes/ParOuImpar'
import { Inverter, MegaSena } from './componentes/Multi'
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'

export default createDrawerNavigator({
  Eventeiras: {
    screen: () => <Evento></Evento>
  },

  ValidarProps: {
    screen: () => <ValidarProps ano={18} label=' anooo '>
                  </ValidarProps>
  },
  Plataformas: {
    screen: Plataformas
  },

  Contador: {
    screen: () => <Contador numeroInicial={1000} />
  },
  MegaSena: {
    screen: () => <MegaSena numeros={8} />,
    navigationOptions: { title: 'Mega sena' }
  },
  Inverter: {
    screen: () => <Inverter texto='React Native'></Inverter>
  },
  ParOuImpar: {
    screen: () => <ParOuImpar numero={30}></ParOuImpar>,
    navigationOptions: { title: 'Par & impar' }
  },

  Simples: {
    screen: () => <Simples texto='Flexivel!'></Simples>
  }

}, { drawerWidth: 300 })
