import { View, Text, StyleSheet, Image } from 'react-native'

export default () => {
  let showValue = true
  return(
    <View style={spend.container}>
      <Text style={spend.title}>Gasto no mês</Text>
      <View style={spend.spends}>
        {showValue?
          <>
            <Text style={spend.money}>R$ 1.253,50</Text>
            <Image
              style={spend.eye}
              source={require('../assets/images/Eye.png')}
            />
          </>
          :
          <>

            <View style={spend.hideMoney}></View>
            <Image
              style={spend.eye}
              source={require('../assets/images/CloseEye.png')}
            />
          </>
        }
      </View>
    </View>
  )
}

const spend = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    marginVertical: 30,
    paddingHorizontal: 20,
  },
  title: {
    color: '#757575',
    fontSize: 16,
    marginBottom: 4,
  },
  spends: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#f00'
  },
  money: {
    fontSize: 26,
  },
  hideMoney: {
    width: 140,
    height: 36,
    borderRadius: 5,
    backgroundColor: '#EEEEEE',
  },
  eye: {
    height: 26,
    marginLeft: -10,
    resizeMode: 'contain'
  }
})
