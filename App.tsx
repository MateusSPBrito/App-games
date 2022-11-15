import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Velha from './src/pages/velha';

export default function App() {
  return (
    <>
      <Velha />
      <StatusBar style="auto" />
    </>
  );
}

