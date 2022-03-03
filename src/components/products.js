import { View, Text, StyleSheet, FlatList } from 'react-native'

const products = [
  {
    id:'001',
    desc: ['Padaria', '40,00']
  },
  {
    id:'002',
    desc: ['Gasolina', '300,00']
  },
  {
    id:'003',
    desc: ['Mercado', '600,00']
  },
  {
    id:'004',
    desc: ['Padaria', '40,00']
  },
  {
    id:'005',
    desc: ['Gasolina', '300,00']
  },
  {
    id:'006',
    desc: ['Mercado', '600,00']
  },
  {
    id:'007',
    desc: ['Padaria', '40,00']
  },
  {
    id:'008',
    desc: ['Gasolina', '300,00']
  },
  {
    id:'009',
    desc: ['Mercado', '600,00']
  },
  {
    id:'010',
    desc: ['Padaria', '40,00']
  },
  {
    id:'011',
    desc: ['Gasolina', '300,00']
  },
  {
    id:'012',
    desc: ['Mercado', '600,00']
  },
  {
    id:'013',
    desc: ['Padaria', '40,00']
  },
  {
    id:'014',
    desc: ['Gasolina', '300,00']
  },
  {
    id:'015',
    desc: ['Mercado', '600,00']
  }
]

export default () => {
  return(
    <View>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={
          ({item}) => <View style={styles.item}>
            <Text style={styles.text}>{item.desc[0]}</Text>
            <Text style={styles.text}>{item.desc[1]}</Text>
          </View>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: "#FFF",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {
    fontSize: 16,
  }

})
