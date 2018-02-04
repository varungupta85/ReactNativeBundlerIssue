/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ContextMenu from './ContextMenu'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  componentDidMount() {
    // Uncomment this and comment out the below initialization
    // of ctxOptions for the app to abort.
    let ctxOptions = {
      items: Platform.select({
        'ios': ['Take Photo', 'Choose From Library', 'Cancel'],
        'android': ['Take Photo', 'Choose From Library']
      }),
      info: Platform.select({
        'ios': {
          cancelButtonIndex: 3
        },
        'android': {}
      })
    }

    // Uncomment this and comment out the above initialization
    // of ctxOptions for the app to NOT abort.
    // let ctxOptions = {
    //   items: ({
    //     'ios': ['Take Photo', 'Choose From Library', 'Cancel'],
    //     'android': ['Take Photo', 'Choose From Library']
    //   })[Platform.OS],
    //   info: ({
    //     'ios': {
    //       cancelButtonIndex: 3
    //     },
    //     'android': {}
    //   })[Platform.OS]
    // }
    
    console.log('Displaying the context menu')
    // Both info and items are undefined on both iOS and Android
    ContextMenu.show(ctxOptions)
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
