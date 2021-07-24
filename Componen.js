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



export default Componen;
