import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BlankScreenTemplate: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>BlankScreenTemplate</Text>
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

// AppRegistry.registerComponent('BlankScreenTemplate', () => BlankScreenTemplate);
export default BlankScreenTemplate;