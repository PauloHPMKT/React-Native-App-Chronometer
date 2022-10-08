import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { Header } from './src/components/Header'
import { AntDesign } from '@expo/vector-icons'
//variavel a ser utilizada no escopo da funcao
  let timer = null

//timer control
let seconds = 0
let minutes = 0
let hours = 0

export default function App() {
  const [number, setNumber] = useState('00:00:00')
  const [textBtn, setTextBtn] = useState('Iniciar')
  const [lastTime, setLastTime] = useState(null)

  const start = () => {
    //timer girando     
    if (timer !== null) {
      //aqui para o timer
      clearInterval(timer)
      timer = null
      setTextBtn('Iniciar')
    } else {
      //comecar a girar o timer
      timer = setInterval(() => {
        seconds++

        if (seconds === 60) {
          seconds = 0
          minutes++
        } 

        if (minutes === 60) {
          minutes = 0
          hours++
        }

        let format = 
        (hours < 10 ? '0' + hours : hours) + ':'
        + (minutes < 10 ? '0' + minutes : minutes) + ':' 
        + (seconds < 10 ? '0' + seconds : seconds)

        setNumber(format)
      }, 10)

      setTextBtn('Parar')
    }

  }

  const clear = () => {
    if (timer !== null) {
      clearInterval(timer)
      timer = null
    }

    setLastTime(number)

    setNumber(0)
    seconds = 0
    minutes = 0
    hours = 0

    setTextBtn('Iniciar')
  }

  const removeLastTime = () => {
    setLastTime(null)
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#4c1355', '#27114F']}
        style={styles.background}
      >
        <Header />
        <View style={styles.timer_container}>
          <LinearGradient
            colors={['#fb5640', '#e61950', '#e61930']}
            style={styles.timer_container}
          >
            <View style={styles.number_area}>
              <Text style={styles.timer}>{ number }</Text>
            </View>
          </LinearGradient>
        </View>

        <View style={styles.btn_area}>
          <LinearGradient
            // Button Linear Gradient
            colors={['#FB5682', '#E61950']}
            style={styles.btn}
            >
            <TouchableOpacity onPress={start}>
                  <Text style={styles.btn_text}>{ textBtn }</Text>
            </TouchableOpacity>
          </LinearGradient>
          
          <LinearGradient
            // Button Linear Gradient
            colors={['#FB5682', '#E61950']}
            style={styles.btn}
          >
            <TouchableOpacity onPress={clear}>
              <Text style={styles.btn_text}>Limpar</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
          <View style={styles.last_area}>
            <Text style={styles.text_runner}>
              {
                lastTime ? `Ultimo tempo: ${lastTime}` : ''
              }
            </Text>
            {/*<TouchableOpacity onPress={removeLastTime}>
              <AntDesign style={styles.icon} name="close" size={25} color="#fff"/>
            </TouchableOpacity>*/}
          </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', 
  },

  timer_container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
    borderRadius: 1000,
    zIndex:1,
  },

  number_area: {
    height: 295,
    width: 295,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#27114F',
    borderRadius: 999,
    borderColor: 'yellow',
  },

  timer: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',  
  },

  btn_area: {
    flexDirection: 'row',
    marginTop: 60,
    height: 40,
    shadowColor: 'red',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.8,
    shadowRadius: 200,
  },

  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 45,
    width: 100,
    margin: 17,
    borderRadius: 20,
  },

  btn_text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },

  last_area: {
    marginTop: 80,
  },
  
  text_runner: {
    fontSize: 25,
    color:'#fff',
  }, 

  /*icon: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999,
    padding: 5,
    backgroundColor: 'red',
  }*/
});
