import React from 'react'
import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity} from 'react-native'
import hewan from '../../assets/rusa.jpeg';

export default function Produk(props) {

    return (
        <View style={styles.wrapper}>
                <Image source={hewan} style={styles.imagehewan} />
                <Text style={styles.texttitle}>Harimau</Text>
                <Text style={styles.textharga}>Rp 1 M</Text>
                <Text style={styles.textlokasi}>Sragen, Jawa Tengah</Text>
                <TouchableOpacity onPress={props.onButtonPress}>
                    <View style={styles.btnbeli}>
                        <Text style={styles.textbtnbeli}>Like</Text>
                    </View>
                </TouchableOpacity>
                
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{padding:20,margin:10,width:212,backgroundColor:'#f2f2f2',borderRadius:20},
    imagehewan:{ width: 170, height: 107, borderRadius: 10 },
    texttitle:{ fontSize: 14, fontWeight: 'bold', marginTop: 10 },
    textharga:{ fontSize: 14, fontWeight: 'bold', paddingVertical: 10, color: 'red' },
    textlokasi:{ fontSize: 14, fontWeight: 'bold', marginTop: 10 },
    btnbeli:{ marginTop: 20, backgroundColor: '#4287f5', borderRadius: 6, padding: 5 },
    textbtnbeli:{ textAlign: 'center', color: '#ffff' }

})
