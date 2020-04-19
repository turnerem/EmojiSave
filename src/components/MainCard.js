import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const MainCard = ({ balType }) => {
  return (
    <View>
      <Text>{balType}</Text>
    </View>
  )
}

export default MainCard

const styles = StyleSheet.create({})
