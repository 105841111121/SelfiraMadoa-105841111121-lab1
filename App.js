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
}

export default App;
