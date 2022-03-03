import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import styles from './styles/styles'

import Header from './components/header'
import Spends from './components/spends'
import Products from './components/products'

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Spends/>
      <Products/>
    </View>
  );
}
