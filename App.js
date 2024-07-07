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
}

export default App;
