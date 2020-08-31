import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Menu = props => {

  const startGame = () => {
    props.setStart(true)
  }

  return (
    <View style={styles.menu}>
      <Text style={styles.title}>Welcome to Fall Down!</Text>
      <Text style={styles.description}>
        Try to keep the ball on the screen for as long as possible, as it falls
        from level to level. Touch the left side of the screen to move the ball
        left and the right side of the screen to move the ball right. Your score
        will be based on how long you can survive!
      </Text>
      <Button
        onPress={startGame}
        title='Click to Start!'
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
    padding: 16,
    margin: 32
  },
  title: {
    fontSize: 32,
    fontFamily: 'VT'
  },
  description: {
    fontSize: 20,
    fontFamily: 'VT',
    padding: 16
  }
})

export default Menu
