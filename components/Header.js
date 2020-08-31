import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {

  return (
    <View style={styles.header}>
      <Text style={styles.text}>Fall Down</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 48,
    paddingBottom: 16,
    backgroundColor: '#eab4d5',
    color: '#110307',
  },
  text: {
    fontSize: 48,
    fontFamily: 'VT'
  }
})

export default Header
