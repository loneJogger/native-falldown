import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Header from './components/Header'
import Footer from './components/Footer'
import Menu from './components/Menu'
import GameWindow from './components/GameWindow'

 const App = () => {

   const [ isStart, setIsStart ] = useState(false)

  return (
    <View style={styles.container}>
      <Header />
      {isStart ? (
        <GameWindow />
      ) : (
        <Menu />
      )}
      <Footer />
      <StatusBar style="auto" />
    </View>
  )
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
