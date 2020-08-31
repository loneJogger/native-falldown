import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFonts } from 'expo-font'
import { AppLoading } from 'expo'

import Header from './components/Header'
import Footer from './components/Footer'
import Menu from './components/Menu'
import GameWindow from './components/GameWindow'

 const App = () => {

  const [ isStart, setIsStart ] = useState(false)

  let [ fontsLoaded ] = useFonts({
    'VT': require('./assets/fonts/VT323-Regular.ttf')
  })

  const setStart = (flag) => { setIsStart(flag) }

  if (!fontsLoaded) {
    return <AppLoading/>
  } else {
    return (
      <View style={styles.container}>
        <Header />
        {isStart ? (
          <GameWindow />
        ) : (
          <Menu setStart={setStart}/>
        )}
        <Footer />
        <StatusBar style="auto" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#110307',
  },
})

export default App
