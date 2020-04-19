import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'
// import ActionButton from 'react-native-action-button';
import { TouchableHighlight } from 'react-native-gesture-handler';


export default class SignUpForm extends Component {
  state = {
    username: ''
  }
  render() {
    return (
      [
        <View 
          style={{ flex: 1, justifyContent: 'center' }}
          key='view'
        >
          <Text
            style={styles.bannerText}
          > 
            Welcome to 🐷🏦🦄 
          </Text>
          <View style={styles.fieldContainer}>
            <TextInput 
              style={styles.text}
              placeholder="Username"
              spellCheck={false}
              autoCorrect={false}
              value={this.state.username}
              onChangeText={this.handleChangeUsername}
            >
            </TextInput>
          </View>
          <View
            style={styles.buttons}
          >
            <View>
              <TouchableHighlight
                onPress={this.handlePressLogin}
                style={styles.button}
                >
                <Text style={styles.buttonText}>Login</Text>
              </TouchableHighlight>

            </View>
            <View>
              <TouchableHighlight
                onPress={this.handlePressSignup}
                style={styles.button}
                >
                <Text style={styles.buttonText}>Sign up</Text>
              </TouchableHighlight>

            </View>
          </View>
        </View>

        // <ActionButton 
        //   onPress={this.handlePress}
        //   buttonColor='#43A047'
        //   buttonText="👉"
        //   key='button'
        // />
      ]
    )
  }

  handlePressLogin = () => {
    this.props.navigation.navigate('Main')
  }

  handlePressSignup = () => {
    this.props.navigation.navigate('Add new 🐈egory')
  }

  handleChangeUsername = (value) => {
    this.setState({ username: value });
  }
}

const styles = StyleSheet.create({
  bannerText: {
    height: 280,
    paddingTop: 230,
    textAlign: 'center',
    fontSize: 30
  },
  fieldContainer: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#fff'
  },
  text: {
    height: 50,
    margin: 0,
    marginRight: 7,
    paddingLeft: 10,
    fontSize: 16
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  button: {
    height: 50,
    width: 160,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },

})
