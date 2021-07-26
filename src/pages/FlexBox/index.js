import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default class FlexBox extends Component {
    constructor(props){
        super(props);
        console.log('ini constructor')

        this.state={
            univ : 'Amikom',
        };
    }
componentDidUpdate(){
    console.log('componen did update');
}

componentWillUnmount(){
    console.log('componen will unmount')
}

componentDidMount(){
    setTimeout(() => {
       this.setState({
       univ : 'UGM',
       });
    },2000);
    console.log('componen did mount');
}

    render() {
        console.log('render')
        return (
            <View>
                <Text style={{
                    textAlign: 'center',
                    color: 'black',
                    marginTop: 10
                }}>Dibawah ini FlexBox JS</Text>
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: 'grey',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                    <View style={styles.boxsatu} />
                    <View style={styles.boxdua} />
                    <View style={styles.boxtiga} />
                    <View style={styles.boxempat} />
                </View>


                <View style={styles.titleyt}>
                    <Text>Beranda</Text>
                    <Text>Vidio</Text>
                    <Text>Playlist</Text>
                    <Text>Komunitas</Text>
                    <Text>Channel</Text>
                    <Text>Tentang</Text>
                </View>

                <View style={{ flexDirection: 'row', marginBottom: 30 }}>
                    <Image source={{ uri: 'https://placeimg.com/640/480/people/grayscale' }} style={{ width: 100, height: 100, borderRadius: 50 }} />
                    <View style={{ marginLeft: 10, justifyContent: 'center' }}>
                        <Text style={{ marginBottom: 20, fontWeight: 'bold' }}>Fachrudin Effendi</Text>
                        <Text>Kuliah di {this.state.univ}</Text>
                        <Text>2018-2021</Text>

                    </View>

                </View>

            </View >

        )
    }
}

const styles = StyleSheet.create({
    boxsatu: {
        backgroundColor: 'black',
        width: 50,
        height: 50
    },
    boxdua: {
        backgroundColor: 'red',
        width: 50,
        height: 150
    },
    boxtiga: {
        backgroundColor: 'green',
        width: 50,
        height: 60
    }, boxempat: {
        backgroundColor: 'blue',
        width: 50,
        height: 90
    },
    titleyt: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 10
    }

}

)
