import React from 'react'
import {FlatList} from 'react-native'
import PropTypes from 'prop-types'

import Row from './Row'

const FlatListStudents = props => 
  <FlatList 
    keyExtractor={(item) => item.id.toString()}
    renderItem={({item}) => <Row {...item} onSelectStudent={props.onSelectStudent} />}
    data={props.students} 
  />

FlatListStudents.propTypes = {
  students: PropTypes.array
}

export default FlatListStudents