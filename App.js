import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import RegisterForm from './src/components/RegisterForm';
import ScrollViewComponent from './src/components/ScrollView';

const App = () => {
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView style={{flex:1}}>
        <ScrollViewComponent />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "lightblue"
  },
});

export default App;