import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import { TouchableHighlight, TextInput } from 'react-native-gesture-handler'
import InputCatCard from './InputCatCard'
import CatItem from './CatItem'
import ActionButton from 'react-native-action-button'

export default class InputCat extends Component {
  state = {
    catList: [
      {cat: 'croissants', catEmoji: '🥐'},
      {cat: 'books', catEmoji: '📚'}
    ],
  }
  render() {
    return (
      // <View style={{ flex: 1 }}>
      [
        <View 
          style={{ 
            // flex: 1,
            marginTop: 10, 
          }}
          key='view'
        >
          <FlatList 
            data={this.state.catList}
            renderItem={({ item }) => <CatItem {...item} /> }
            // renderItem={({ item }) => <Text>HEY</Text> }
            keyExtractor={ item => item.cat }
            style={styles.flatList}
          /> 
          <InputCatCard 
            handlePress={this.handlePress} 
          />
        </View>,
          <ActionButton
            onPress={() => {
              this.props.navigation.navigate('Main')
            }}
            buttonColor='#43A047'
            buttonText="👉"
            key='button'
          />
      

      ]
      // </View>
    )
  }


  handlePress = (cat, catEmoji) => {
    this.setState(({ catList }) => {
      catList.push({ cat, catEmoji })
      return { catList }
    })
  }
}

const styles = StyleSheet.create({
  flatList: {
    borderTopColor: '#b2b2b2', 
    borderTopWidth: 1,
    marginLeft: 7, 
    marginRight: 7,
    // flex: 1
  }

})
