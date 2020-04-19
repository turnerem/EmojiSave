import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const EmojiCard = ({ card }) => {
  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <Text style={styles.category}>{card.catEmo}</Text>
        <Text style={styles.amount}>£ 0.00</Text>
      </View>
    </TouchableOpacity>
  )
}

export default EmojiCard

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    paddingTop: 10,
    paddingBottom: 20,
    margin: 10,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#FCE205',
    borderRadius: 10
  },
  category: {
    fontSize: 35,
    textAlign: 'center',
    width: '60%'
  },
  amount: {
    fontSize: 30,
    textAlign: 'right'
  }
})
