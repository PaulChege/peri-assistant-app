import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import Row from './Row'

const renderItem = ({item}) => <Row {...item} />

const FlatListStudents = props => 
  <FlatList 
    style={styles.list}
    keyExtractor={(item) => item.id.toString()}
    renderItem={renderItem} 
    data={props.students} 
  />

FlatListStudents.propTypes = {
  students: PropTypes.array
}


const styles = StyleSheet.create({
  list: {
    marginTop: 30
  }
})

export default FlatListStudents