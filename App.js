import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

const App = () => {
  return (
    <View style={styles.container}>
     <StatusBar backgroundColor={'#5758BB'}/>
     <View >
     <Text style={styles.judul}>MAP IN REACT NATIVE</Text>
     </View>
     <View style={styles.map}>
     <MapView
       provider={PROVIDER_GOOGLE}
       style={{flex:1}}
       region={{
         latitude: -7.578130581350408, 
         longitude: 110.80924118405656,
         latitudeDelta: 0.01,
         longitudeDelta: 0.01,
       }}
     >
     </MapView>
    </View>
    </View>
 
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#9980FA',
  },
  map:{
   flex:1,
    borderRadius:10,
    padding:10,
    backgroundColor:'#5758BB',
    margin:15,
    elevation:5,
  },
  judul:{
    color:'#ecf0f1',
    fontWeight:'bold',
    fontSize:20,
    textAlign:'center',
    marginTop:10,
  }
 });