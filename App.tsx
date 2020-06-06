import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

App.displayName = 'App';
export default App;