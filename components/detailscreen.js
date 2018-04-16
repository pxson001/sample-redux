import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class DetailScreen extends React.Component {

  render() {

    console.log('======DETAIL======')
    console.log(this.props)

    console.log(this.state)

    return (
      <View style={styles.container}>
        <Text>This is Detail Screen</Text>
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
