import React, { Component } from 'react';
import { Text, View, Image, TextInput } from 'react-native';

const SimpleComponen = () => {
    return (
        <View>
            <Text style={{ textAlign: 'center', color: 'black', marginTop: 10 }}>Dibawah ini App JS</Text>
            <View style={{ borderWidth: 1 }} />
            <Home />
            <Foto />
        </View>
    )
}

const Home = () => {
    return (
        <View>
            <Text>hdoro</Text>
            <Text>hdoro</Text>
        </View>
    );
};

const Foto = () => {
    return (
        <View>
            <Image source={{ uri: 'https://placeimg.com/100/100/animals' }} style={{ width: 100, height: 100 }} />
            <TextInput style={{ borderWidth: 1 }} />
            <BoxGreen />
            <Profile />
        </View>
    );
}



class BoxGreen extends Component {
    render() {
        return (
            <Text>ini componen class</Text>
        )
    }
}

class Profile extends Component {
    render() {
        return (
            <View>
                <Image source={{ uri: 'https://placeimg.com/100/100/animals' }} style={{ width: 100, height: 100, borderRadius: 50 }} />
                <Text> ini hewan kucing </Text>


            </View>
        )
    }
}



export default SimpleComponen;