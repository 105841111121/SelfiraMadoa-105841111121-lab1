import { TextInput } from 'react-native'
import React from 'react'

const Inputan = ({name, color}) => {
    return(
        <TextInput placeholder = {`${ name }`}
        placeholderTextColor={'rgba(0,0,0,0.5)'}
        style = {{
            borderWidth: 1,
            borderColor: 'gray',
            borderRadius: 5,
            width : 350,
            height: 64,
            marginVertical: 8,
            marginHorizontal: 20,
            paddingHorizontal: 10,
            BackgroundColor: 'white',
            color : color,
            fontSize: 16,
            textAlignVertical: 'center',
            textAlign: 'left'
        }}
        secureTextEntry = { name === 'password'}
    />
    )
}

export default Inputan
