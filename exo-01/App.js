import React from 'react';
import { Text, View } from 'react-native';

const App = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgoundColor: 'grey'
      }}>
      <Text style={{ fontSize: 40, }}>Hello</Text>
    </View>
  );
}

export default App;