import { View, Text, StyleSheet, Image } from 'react-native'

export default function() {
  return(
    <View style={header.container}>
      <Text style={header.logo}>MIPENDS</Text>
      <Image
        style={header.menu}
        source={require('../assets/images/BurguerMenu.png')}
      />
    </View>
  )
}

const header = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 30,
    color: '#468655',
    fontWeight: 'bold'
  },
  menu: {
    height: 20,
    resizeMode: 'contain'
  },
})
