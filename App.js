import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from 'react'
const App = () => {
  return (
    <View style= {{
      flex: 1,
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Image
        source={require('./assets/latar tokokedia.jpg')}
        style= {{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 15,
          opacity: 0.4,
          zIndex: -1,
        }}
        resizeMode="cover"
        />
        <ScrollView contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}>
        <Image 
        source={require('./assets/tokokedia.png')}
        style= {{
          width: 150,
          height: 150,
          marginTop: 50,
          opacity: 1,
          zIndex: 1,
        }}
        resizeMode="cover"/>

        <Text style={{
          fontSize: 20,
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          color: 'white',
          position: 'absolute',
          top: 0,
          marginTop: 290,
        }}>tokokedia</Text>

        <Text style={{
          color: 'white',
          fontSize: 18,
          textAlign: 'center',
          marginTop: 20,
        }}>belanja lebih murah hanya di tokokedia</Text>

        <Text style={{
          color: 'white',
          fonSize: 18,
          textAlign: 'center',
          marginTop: '20',
        }}> dapatkan berbagai diskon menarik setiap saat</Text> 

        <View style= {{
          flexDiection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
          marginBottom: 40,
        }}>
          <View style={{ marginHorizontal: 10}}>
            <Text style={{
              witdh: 100,
              height: 50,
              color: 'white',
              backgroundColor: 'grey',
              textAlign: 'center',
              lineHeight: 50,
              fontSize: 20,
              borderRadius: 10,
              marginTop: 50,
            }}>Login</Text>
           </View> 
           <View style= {{marginHorizontal: 10}}>
            <Text style= {{
              width: 100,
              height: 50,
              color: 'white',
              backgroundColor: 'green',
              textAlign: 'center',
              lineHeight: 50,
              fontSize: 20,
              borderRadius: 20,
              marginTop: 50,
          }}>Register</Text>
           </View>
          </View>
          </ScrollView>
        </View>
  );
}

export default App;