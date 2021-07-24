import React, { Component } from 'react'
import { View, Text, TextInput, Image } from 'react-native';


const SampleComponen = () => {
    return (
        <View>
            <Text style={{ textAlign: 'center', color: 'black', marginTop: 30 }}>Dibawah ini SampleComponen JS</Text>
            <View style={{ borderWidth: 1 }} />
            <Nama />
            <TextInput style={{ borderWidth: 1 }} placeholder={"Inputin namamu"} />
            <Animal />
            <Profile />
        </View >
    )
}

const Nama = () => {
    return (
        <View>
            <Text>hello world 2</Text>
            <Foto />
        </View>
    )
};


const Foto = () => {
    return (
        <Image source={{ uri: 'https://placeimg.com/640/480/nature' }} style={{ width: 150, height: 150 }} />
    )
};


class Animal extends Component {
    render() {
        return <Image source={{ uri: 'https://placeimg.com/640/480/nature/grayscale' }}
            style={{ width: 150, height: 150, borderRadius: 40, margin: 100 }} />
    }
}

class Profile extends Component {
    render() {
        return (
            <View>
                <Text>componen profile</Text>
            </View>
        )
    }
}


export default SampleComponen;