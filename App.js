import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import News from './containers/news';
import { Provider } from 'react-redux';
import storeManager from './store/index';
import JMRouter from './navigation/index';

const store = storeManager()

export default class App extends React.Component {

  constructor(props) {
    super(props)
    console.disableYellowBox = true;
  }
  render() {
    return (
      <Provider store={store}>
        <JMRouter />
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

