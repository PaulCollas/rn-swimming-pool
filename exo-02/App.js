import React from 'react';
import { Button, View } from 'react-native';

const App = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgoundColor: 'grey'
      }}>
      <Button
        title="BUTTON"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </View>
  );
}

export default App;