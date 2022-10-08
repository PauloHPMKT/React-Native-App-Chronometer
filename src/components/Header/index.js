import { View, Text, StyleSheet, StatusBar } from 'react-native'

//setting status bar for IOS or Android
const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64

export const Header = () => {
  return(
    <View style={styles.header}>
      <Text style={styles.header_title}>Chronometer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute', 
    top: statusBarHeight,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingEnd: 20,
    flexDirection: 'row',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: '#fff',
  },

  header_title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
})