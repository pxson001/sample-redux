import React from 'react';
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';


export default class Counter extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {count, onIncrement, onDecrease} = this.props

    console.log('count : ' + count);
    return (
      <View style={styles.container}>
        <Text>{count}</Text>
        <Button onPress={onIncrement} title="Increase"></Button>
        <Button onPress={onDecrease} title="Decrease"></Button>
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