import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import heart from '../../assets/heart.png'


export default function Cart(props) {

    
    return (
        <View>
            <View style={{justifyContent:'center',flexDirection:'row'}}>
            <View style={styles.loveWrapper}>
                <Image source={heart} style={styles.heart}/>
                <Text style={styles.noKeranjang}>{props.qty}</Text>
            </View>
        </View>
        <Text style={styles.textdesc}>Orang yang menyukai anda</Text>
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
    },
    textdesc:{fontSize:13,fontWeight:'bold',textAlign:'center'}
})
