import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './app/screens/home/home'
import { Routes } from './app/routes';

export default function App() {
  return (
    <>
      <Routes/>
      <StatusBar style="light"/>
    </>
  );
}

