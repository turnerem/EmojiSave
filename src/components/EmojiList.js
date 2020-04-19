import React, { Component } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import EmojiCard from './EmojiCard.js';

class EmojiList extends Component {
  state = {
    emoList: []
  }

  componentDidMount() {
    const emoList = require('./db.json').emoList;
    this.setState({ emoList });
  }

  render() {
    return (
      <FlatList
        style={styles.list}
        data={this.state.emoList}
        renderItem={({ item }) => <EmojiCard card={item} />}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default EmojiList;