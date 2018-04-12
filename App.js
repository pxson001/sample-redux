import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import News from './containers/news';
import { Provider } from 'react-redux';
import storeManager from './store/index';

const store = storeManager()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <News />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

