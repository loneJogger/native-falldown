import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Menu = () => {

  const startGame = () => {
    console.log('game started')
  }

  return (
    <View style={styles.menu}>
      <Text>Welcome to Fall Down!</Text>
      <Button
        onPress={startGame}
        title='Start!'
        color='#86284f'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  menu: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eab4d5',
  }
})

export default Menu
