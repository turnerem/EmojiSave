import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native'
import ActionButton from 'react-native-action-button'

export default class InputCatCard extends Component {
  state = {
    cat: '',
    catEmoji: ''
  }
  
  render() {
    return (
      <View style={{
        // flex: 1,
        margin: 1
      }}>
        <View style={styles.fieldContainer}>
          <TextInput
            style={[styles.text, styles.textCat]}  
            placeholder="coffee"
            spellcheck={false}
            autoCorrect={false}
            value={this.state.cat}
            onChangeText={(e) => { this.handleChange(e, 'cat') }}
          >
          </TextInput>
          <TextInput
            style={[styles.text, styles.textEmoji]}  
            placeholder="emoji"
            spellcheck={false}
            autoCorrect={false}
            value={this.state.catEmoji}
            onChangeText={(e) => { this.handleChange(e, 'catEmoji') }}
          >
          </TextInput>

        </View>
        <View style={styles.buttonContainer}>
        <ActionButton
          onPress={ () => { 
            this.props.handlePress( this.state.cat, this.state.catEmoji )
            this.setState({ cat: '', catEmoji: '' })
          } }
          size={40}
          buttonColor='grey'

        />
          {/* <TouchableHighlight
            onPress={ () => { 
              this.props.handlePress( this.state.cat, this.state.catEmoji )
              this.setState({ cat: '', catEmoji: '' })
            } }
            style={styles.button}
          >
            <Text style={styles.buttonText}>Add Item</Text>
          </TouchableHighlight> */}

        </View>

      </View>
    
    )
  }

  handleChange = (value, stateKey) => {
    this.setState({ [stateKey] : value })
  }

}

const styles = StyleSheet.create({
  fieldContainer: {
    // flex: 1,
    flexDirection: 'row',
    // backgroundColor: '#ff8b94',
    marginTop: 7,
    // marginBottom: 7,
    marginLeft: 7
  },
  text: {
    height: 40,
    margin: 0,
    marginRight: 7,
    paddingLeft: 10,
    backgroundColor: '#fff'
  },
  textCat: {
    flex: 3,
    
  },
  textEmoji: {
    flex: 1,
  },
  buttonContainer: {
    marginTop: -10,
    marginRight: -10,
    // alignSelf: 'flex-end',
  },
  button: {
    height: 50,
    backgroundColor: 'grey',
    borderColor: '#48BBEC',
    margin: 7,
    marginTop: 7,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 18
  }
})
