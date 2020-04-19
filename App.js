import 'react-native-gesture-handler';

import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpForm from './src/components/SignUpForm';
import InputCat from './src/components/InputCat';
import EmojiList from './src/components/EmojiList';
// import { Button } from 'native-base';
import MainView from './src/components/MainView';

const Stack = createStackNavigator();

export default function App() {
  return (
    // <View  style={{ backgroundColor: '#ffffe4' }}>
      <NavigationContainer >
        <Stack.Navigator>
        <Stack.Screen name="Login / Signup" component={SignUpForm} />
        <Stack.Screen name="Signup" component={SignUpForm} />
          <Stack.Screen name="Main" component={MainView} />
          <Stack.Screen 
            name="Add new 🐈egory" 
            component={InputCat} 
          />
          <Stack.Screen name="EmojiList" component={EmojiList} />
        </Stack.Navigator>
      </NavigationContainer>

    // </View>
    // <EmojiList />
    // <SignUpForm />
  );
}


