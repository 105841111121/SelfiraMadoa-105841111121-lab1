import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ButtonComponent from '../button/button'
import Inputan from '../TextInput/input'

const ForgotPassword = () => {
    return (
        <View style = {{
            flex: 1,
            backgroundColor: '#EEEEEE',
            paddingHorizontal: 30,
            paddingTop: 100
        }}>
            <TouchableOpacity style = {{
                position: 'absolute',
                top: 60,
                letf: 20
            }}>
                <Image
                    source={require('../../assets/back.jpg')} 
                    style = {{ width: 30, height: 30}}
                    />
            </TouchableOpacity>
            <View style = {{
                marginBottom: 100,
                marginTop: 10
            }}>
                <Text style = {{
                    fontWeight: 'bold',
                    fontSize:  40
                }}>
                    Forgot password
                </Text>
            </View>
                <View style = {{
                    marginBottom: 42
                }}>
                    <Text style = {{
                        fontSize: 14,
                        marginBottom: 15
                    }}>
                        please, enter your email addres. you will receive a link to create a new password via email
                    </Text>
                    <Inputan name = "Email" color = "black" />
                    <Text style = {{
                        fontSize: 12,
                        paddingHorizontal: 20,
                        color: 'red',
                        marginTop: 5
                    }}>
                        Not a valid email addres. should be yor@email.com
                    </Text>
                </View>
                <ButtonComponent title= "SEND" color = "red" />
        </View> 
    )
}

export default ForgotPassword