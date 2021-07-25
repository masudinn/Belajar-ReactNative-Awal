import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import heart from '../../assets/heart.png'

export default function Position() {
    return (
        <View style={styles.wrapper}>
                    <Text style={{
                    textAlign: 'center',
                    color: 'black',
                    marginTop: 10
                }}>Dibawah ini Position JS</Text>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: 'grey',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}></View>
            <View style={styles.loveWrapper}>
                <Image source={heart} style={styles.heart}/>
                <Text style={styles.noKeranjang}>10</Text>
            </View>
            <Text style={{fontSize:12}}>Orang yang menyukai anda</Text>
        </View>
        
        
    )
}

const styles = StyleSheet.create({
    heart : {
        width:50,
        height:50
    },
    wrapper:{
        alignItems:'center',
    },
    loveWrapper: {
        position:'relative',
        borderWidth:1,
        borderColor:'grey',
        width:93,
        height:93,
        borderRadius:93/2,
        alignItems:'center',
        justifyContent:'center',
        margin:10
    },
    noKeranjang:{
        backgroundColor:'green',
        color:'white',
        borderRadius:30,
        padding:5,
        fontSize:12,
        position:'absolute',
        top:0,
        right:0
    }
})
