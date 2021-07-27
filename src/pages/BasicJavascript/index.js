import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function BasicJavascript() {

    const nama = 'udin'
    const umur = 21

    const makananOrang = {
        nama: 'telo',
        harga: 5000,
        makananDesa: true,
        jenisMakanan: {
            berlemak: false,
            berserat : true
        }
    }

    function sampleFunction(name, harga) {
        return console.log(`ini makanan:${name} harganya:${harga}`)
    }

    sampleFunction('pizza', 5000)
    

    const namaMakanan = ['tahu', 'tempe', 'bakwan','telo']
    
    // if (makananOrang === 'telo') {
    //     console.log('telo goreng')
    // } else {
    //     console.log('bukan telo')
    // }


    const makanan = (x) => {
        //let hasilLog = ''
        // if (x.nama === 'telo') {
        //     hasilLog = 'ini telo'
        // } else {
        //     hasilLog = 'ini bukan telo'
        // }
        // return hasilLog
        return x.nama === 'telo' ? 'ini telo' :'ini bukan telo!'
    };

    return (
        <View style={styles.container}>
            <Text style={styles.textview}>Belajar dasar js ReactNative</Text>
            <Text>hai nama saya {nama}, umur saya {umur}</Text>
            <Text>{makanan(makananOrang)}</Text>
            <Text>{namaMakanan[0]}</Text>
            <Text>{namaMakanan[1]}</Text>
            <Text>{namaMakanan[2]}</Text>
            <Text>==============</Text>
            {namaMakanan.map(m => (
                <Text>{m}</Text>
            ))}


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:20
    },
    textview: {
        textAlign:'center',
        fontWeight: 'bold',
        marginBottom:20
    }
})
