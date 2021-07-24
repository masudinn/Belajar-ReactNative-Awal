import React, { Component } from 'react'
import { View, Text, Image, TextInput, StyleSheet, ScrollView } from 'react-native'

const Componen = () => {
    return (
        <View>
            <ScrollView>
                <SampleComponen />
                <StylingComponen />
            </ScrollView>

        </View>


    )


}

const StylingComponen = () => {
    return (
        <View>

            <Text style={styles.textTitle}>Styling Componen</Text>

            <View style={styles.viewTitle}>

            </View>
        </View>
    )


}
const styles = StyleSheet.create({
    textTitle: {
        marginTop: 10,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'green'
    },
    viewTitle: {
        width: 200,
        height: 200,
        backgroundColor: 'green',
        borderColor: 'blue',
        borderWidth: 2,
        margin: 40
    }
})
const SampleComponen = () => {
    return (
        <View>
            <Text style={{ alignSelf: 'center' }}>hello world</Text>
            <View style={{ borderColor: 'black', borderWidth: 1 }} />
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


export default Componen;
