import {StyleSheet} from 'react-native'

export const colors = {
  primary:'#2980B9',
  textGrey: '#7B8D93',
  white: '#FFFFFF'
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
    textAlign: 'center',
    fontFamily: 'quicksand-regular',
    fontSize: 20,
    paddingBottom: 20,
  },
  textInput: {
    fontFamily: 'quicksand-regular',
    paddingBottom: 5,
    paddingTop: 10,
    paddingHorizontal: 10
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
})
