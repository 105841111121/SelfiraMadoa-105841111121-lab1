import React from 'react';
import { Text, View } from 'react-native';

const ButtonComponent = ({ title, color }) => {
  return (
    <View style={{ marginHorizontal: 20 }}>
      <Text style={{
        width: 100,
        height: 45,
        color: 'white',
        backgroundColor: color,
        textAlign: 'center',
        fontSize: 20,
        borderRadius: 10,
      }}>{title}</Text>
    </View>
  );
}

export default ButtonComponent;
