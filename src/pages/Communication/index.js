import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Cart from '../../componen/cart'
import Produk from '../../componen/produk'

export default function Communication() {

    const[totalProduk,setTotalProduk] = useState(0)

    return (
        <View style={styling.wrapper}>
            <Text style={{marginBottom:20,textAlign:'center', fontWeight:'bold'}}>Latihan komunikasi antar componen</Text>
        
        <Produk onButtonPress={() => setTotalProduk(totalProduk+1)}/>
        <Cart qty={totalProduk}/>
        </View>
    )
}

const styling = StyleSheet.create({
    wrapper:{
        padding:10
    }


})


