import * as React from 'react';
import { SafeAreaView } from 'react-native';
import Header from './components/header/Header';
import MainScreen from './components/homeMain/MainScreen'
import Footer from './components/footer/Footer'
import { globaStyles } from './components/styles/styles';

export default function App() {
  return (
    <SafeAreaView style={globaStyles.conteiner}>
      <Header />
      <MainScreen />
      <Footer />
    </SafeAreaView>
  );
}