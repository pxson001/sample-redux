import React from 'react';
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { store } from '../App';


export default class Counter extends React.Component {

  constructor(props) {
    super(props);
  }

 
  render() {
    const {counter, onIncrement, onDecrease, onDouble} = this.props

    return (
      <View style={styles.container}>
        <Text>{counter.count}</Text>
        <Button onPress={onIncrement} title="Increase"></Button>
        <Button onPress={onDecrease} title="Decrease"></Button>
        <Button onPress={onDouble} title="Double"></Button>
      </View>
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