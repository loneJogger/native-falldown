import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Footer = () => {

  const getYear = () => {
    const now = new Date()
    const year = now.getUTCFullYear()
    return year
  }

  return (
    <View style={styles.footer}>
      <Text style={styles.text}>The Holy Gross &copy; {getYear()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 16,
    paddingBottom: 32,
    backgroundColor: '#eab4d5',
    color: '#110307',
  },
  text: {
    fontSize: 32,
    fontFamily: 'VT'
  }
})

export default Footer
