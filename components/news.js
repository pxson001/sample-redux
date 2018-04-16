import React from 'react';
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, Button, ListView, ActivityIndicator, Image } from 'react-native';
import { connect } from 'react-redux';
import { store } from '../App';
import NewsRow from '../views/news/row'


export default class News extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.posts != null) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.posts)
      })
    }
  }
 
  render() {
    const { dataSource } = this.state
    const {isFetching, posts, onFetch} = this.props

    console.log(posts)

    return (
      <View style={styles.container}>
        <ActivityIndicator style={isFetching ? styles.indicator : styles.hidden} size="large" color="#0000ff" />
        <ListView
          style={styles.listview}
          dataSource={dataSource}
          renderRow={(rowData) => <NewsRow {...rowData} />}
        />
        <Button onPress={onFetch} title="Fetch News"></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  hidden: {
    display: 'none'
  },
  indicator: {
    marginTop: 50,
  },
  listview: {
    marginTop: 20,
  },
  cell: {
    margin: 10,
    padding: 10,
    flex: 1,
    flexDirection: 'row',
  }
});