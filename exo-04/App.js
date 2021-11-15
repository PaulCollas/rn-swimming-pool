import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const App = () => {
  return (
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "column"
    }]}>

      <View style={[styles.header]}>
       <Text style={{color: '#ffffff' }}>
        Header
       </Text>
      </View>
      
      <View style={[ styles.body] }>
       <Text style={{color: '#000', fontSize: 12 }}>
        Hello
       </Text>
       <Image
        style={{width: 150, height: 150,}}
        source={{
          uri: 'https://img-19.ccm2.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg',
        }}
       />
      </View>
      
      <View style={[styles.footer]}>
       <Text style={{color: '#000' }}>
        Footer
       </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1, 
    backgroundColor: '#000000', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  body: {
    flex: 8, 
    backgroundColor: '#fff', 
    alignItems: 'center',
  },
  footer: {
    flex: 1, 
    backgroundColor: '#F1F1F1', 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});

export default App;
