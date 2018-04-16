import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux'

const NewsRow = (props) => (
  <TouchableHighlight onPress={Actions.counter}>
    <View style={styles.container}>
      <Image source={{ uri: props.thumbnailUrl}} style={styles.photo} />
      <Text style={styles.text}>
        {`${props.title}`}
      </Text>
    </View>
  </TouchableHighlight>
)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});

export default NewsRow;