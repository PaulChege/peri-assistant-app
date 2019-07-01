import {StyleSheet} from 'react-native'

export const colors = {
  primary:'#2980B9',
  textGrey: '#7B8D93',
  textDarkGrey: '#303030',
  white: '#FFFFFF',
}

export const commonStyles = StyleSheet.create({
  mainTitle: {
    color: colors.textGrey,
    textAlign: 'center',
    fontFamily: 'quicksand-regular',
    fontSize: 30,
    paddingBottom: 30,
  },
  title: {
    color: colors.textGrey,
    textAlign: 'left',
    fontFamily: 'quicksand-regular',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 8
  },
  textInput: {
    fontFamily: 'quicksand-regular',
    paddingBottom: 5,
    paddingTop: 10,
    paddingHorizontal: 10
  },
  textInputWithLabel: {
    fontFamily: 'quicksand-regular',
    paddingBottom: 10,
    paddingTop: 5,
    paddingHorizontal: 10,
    color: colors.textGrey
  },
  inputLabel: {
    fontSize: 15,
    fontFamily: 'quicksand-regular',
    paddingLeft: 8,
    width: '100%',
    textAlign: 'left',
    paddingTop: 5,
  },
  error: {
    textAlign: 'center',
    color: 'red'
  },
  buttonSection: {
    marginTop: 20,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: colors.primary,
    width: '40%',
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
    fontFamily: 'quicksand-regular',
    paddingBottom: 8,
    width: '100%',
    textAlign: 'center',
  },
  buttonRemove: {
    backgroundColor: colors.textGrey,
    width: '40%',
  },
  infoText: {
    color: colors.textGrey,
    fontSize: 15,
    fontFamily: 'quicksand-regular',
    paddingLeft: 8,
    width: '100%',
    textAlign: 'left',
  },
  infoLabel: {
    fontSize: 15,
    fontFamily: 'quicksand-regular',
    paddingLeft: 8,
    width: '100%',
    textAlign: 'left',
  },
  drawerIcon:{
    fontSize: 30, 
    color: colors.white,
    paddingTop: 15,
    paddingLeft: 5
  }
})
