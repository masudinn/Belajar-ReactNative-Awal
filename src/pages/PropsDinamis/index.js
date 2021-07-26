import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import harimau from '../../assets/rusa.jpeg'


function Story(props){
    return(
        <View style={{alignItems:'center'}}>
            <Image source={{uri:props.gambar}} style={{maxWidth:50,margin:10,width:50,height:50,borderRadius:25}}/>
            <Text style={{textAlign:'center'}}>{props.judul}</Text>
        </View>
    )
}


export default function Props() {

    return (
        <View>
            <Text style={{textAlign:'center',fontWeight:'bold'}}>Belajar props</Text>
            <ScrollView horizontal>
                <View style={{flexDirection:'row'}}>
                <Story judul='Harimau' gambar='http://c.files.bbci.co.uk/1268F/production/_105870457_harimau01.jpg'/>
                <Story judul='Macan Putih' gambar={'https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/02/14/886010951.jpeg'}/>
                <Story judul='Gajah' gambar={'https://cdn0-production-images-kly.akamaized.net/Q9mek9ZQeph88_WEWIHtPruHO20=/640x640/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3161542/original/043729400_1593000862-Ilustrasi_Gajah.jpg'}/>
                <Story judul='Harimau' gambar='http://c.files.bbci.co.uk/1268F/production/_105870457_harimau01.jpg'/>
                <Story judul='Macan Putih' gambar={'https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/02/14/886010951.jpeg'}/>
                <Story judul='Gajah' gambar={'https://cdn0-production-images-kly.akamaized.net/Q9mek9ZQeph88_WEWIHtPruHO20=/640x640/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3161542/original/043729400_1593000862-Ilustrasi_Gajah.jpg'}/><Story judul='Harimau' gambar='http://c.files.bbci.co.uk/1268F/production/_105870457_harimau01.jpg'/>
                <Story judul='Macan Putih' gambar={'https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/02/14/886010951.jpeg'}/>
                <Story judul='Gajah' gambar={'https://cdn0-production-images-kly.akamaized.net/Q9mek9ZQeph88_WEWIHtPruHO20=/640x640/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3161542/original/043729400_1593000862-Ilustrasi_Gajah.jpg'}/>
                </View>
            </ScrollView>
        </View>
        
    )
}

const styles = StyleSheet.create({})
