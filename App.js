import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Counter from './containers/counter';
import { Provider } from 'react-redux';
import rootReducer from './redux/index';
import { createStore } from 'redux';

const store = createStore(rootReducer)


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Counter />
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

