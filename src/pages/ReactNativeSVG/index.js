import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Svg from '../../assets/svg1.svg'

export default function ReactNativeSVG() {
    return (
        <View style={ styles.container }>
            <Text style={{textAlign:'center',marginBottom:30}}>Ini halaman latihan svg</Text>
            <Svg width={344} height={125}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:20
    }
})
