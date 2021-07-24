import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import hewan from '../../assets/rusa.jpg';

const SampleStyling = () => {
    return (
        <View >
            <Text style={{ textAlign: 'center', color: 'black', marginTop: 20 }}>Dibawah ini Sample Styling JS</Text>
            <View style={{ borderWidth: 1 }} />
            <Text style={styles.text}>box</Text>
            <View style={{
                marginBottom: 20,
                width: 120,
                height: 100,
                backgroundColor: '#4287f5',
                borderWidth: 3,
                borderColor: '#9042f5'
            }} />
            <View style={{ padding: 12, backgroundColor: '#f2f2f2', width: 212, borderRadius: 10 }}>

                <Image source={hewan} style={{ width: 188, height: 107, borderRadius: 10 }} />
                <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>Harimau</Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold', paddingVertical: 10, color: 'red' }}>Rp 1 M</Text>
                <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>Sragen, Jawa Tengah</Text>
                <View style={{ marginTop: 20, backgroundColor: '#4287f5', borderRadius: 6, padding: 5 }}>
                    <Text style={{ textAlign: 'center', color: '#ffff' }}>Beli</Text>
                </View>

            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#9042f5'
    }
})

export default SampleStyling;