import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import { ListItem, Body, Left, Text, Thumbnail } from 'native-base';

const Row = props => (
  <ListItem thumbnail style={styles.listItem} >
    <Left>
      <Thumbnail square 
      style={{width: 35, height: 35 }}
      source= {require('./assets/avatar.png')} />
    </Left>
    <Body>
      <Text style={styles.text}>{props.name}</Text>
      <Text style={styles.text}>{props.institution}</Text>
    </Body>
  </ListItem>
)

const styles = StyleSheet.create({
  text:{
    fontSize: 12,
    fontFamily: 'quicksand-regular'
  },
  listItem :{
    paddingRight: 20
  }
})

Row.propTypes = {
  name: PropTypes.string,
  institution: PropTypes.string,
  mobile_number: PropTypes.string
}

export default Row