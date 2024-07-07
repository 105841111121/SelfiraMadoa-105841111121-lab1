<<<<<<< HEAD
import { Text, View, Image, TextInput} from 'react-native'
import React from 'react'

const App = () => {
    const Inputan = ({ nama, color }) => {
      return(
        <TextInput
        placeholder={`masukan ${nama}`}
        style = {{
          borderWidth: 1,
          borderColor: 'black',
          borderRadius: 10,
          width: 300,
          height: 50,
          marginVertical: 10,
          padding: 10,
          backgroundColor: 'silver',
          color: color,
        }}
      />
      )
    }

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
        <Inputan nama = " Email" color = " white"/>
        <Inputan nama = "username" color = "white"/>
        <Inputan nama = " pasword" color = "black"/>
      </View>
  )
=======
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import ButtonComponent from './component/button/button'; 

const App = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Image
        source={require('./assets/latar.jpg')}
        style={{
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
          style={{
            width: 150,
            height: 150,
            marginTop: 50,
            opacity: 1,
            zIndex: 1,
          }}
          resizeMode="cover"
        />

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
          fontSize: 18,
          textAlign: 'center',
          marginTop: 20,
        }}>dapatkan berbagai diskon menarik setiap saat</Text>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 70,
          marginBottom: 40,
        }}>
          <ButtonComponent title="Sign In" color="gray" />
          <ButtonComponent title="Sign Up" color="green" />
        </View>

      </ScrollView>
    </View>
  );
>>>>>>> 337f05fb6d272da88ef688c16ce25ec68aa63fb8
}

export default App;
