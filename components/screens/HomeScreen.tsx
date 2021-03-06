import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>
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

AppRegistry.registerComponent('HomeScreen', () => HomeScreen);
export default HomeScreen;