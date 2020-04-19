import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

const CatItem = ({ cat, catEmoji }) => {
  return (
    <View
      style={styles.fieldContainer}
    >
      <View
        style={styles.textCatWrapper}
      >
        <Text 
          style={[styles.text, styles.textCat]}
        >{cat}</Text>

      </View>
      <Text
        style={[styles.text, styles.textEmoji]}
      >{catEmoji}</Text>
    </View>
  )
}

export default CatItem

const styles = StyleSheet.create({
  fieldContainer: {
    // flex: 1,
    flexDirection: 'row',
    // backgroundColor: '#ff8b94',
    // marginTop: -1,
    // marginBottom: 10,
    // borderTopWidth: 1,
    // marginLeft: 7,
    borderBottomColor: '#b2b2b2',
    borderBottomWidth: 1,
  }, 
  text: {
    height: 40,
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    textAlignVertical: 'center',
    // backgroundColor: '#fff'
  },
  textCatWrapper: {
    flex: 3,
    borderRightColor: '#b2b2b2',
    borderRightWidth: 1
  },
  textCat: {
    fontSize: 15,
    paddingLeft: 10,
    
  },
  textEmoji: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    // marginLeft: -1,
    // marginRight: 7,
    paddingLeft: 5,
    paddingRight: 3
  },
})
