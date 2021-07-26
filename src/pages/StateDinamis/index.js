import React, { useState, Component} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'


    function Counter(){

        const[number,setNumber] = useState(0);

        return(
            <View>
            <Text style={{marginBottom:20,textAlign:'center'}}>{number}</Text>
            <Button title='Tambah' onPress={() => setNumber(number+1)}></Button>

            </View>
        )
    }

export default function StateDinamis() {
    return (
        <View style={styles.wrapper}>
            <Text>Latihan State Dinamis func componen</Text>

            <Counter/>
            <Counter/>

            <Text style={{marginTop:30}}>Latihan State Dinamis class componen</Text>

            <CounterClas/>
        </View>
    )
}


const styles = StyleSheet.create({
    wrapper:{
        padding:20
    },

})



class CounterClas extends Component {

    state = {
        angka : 0
    }
    render() {
        return (
            <View>
            <Text style={{marginBottom:20,textAlign:'center'}}>{this.state.angka}</Text>
            <Button title='Tambah' onPress={() => this.setState({angka:this.state.angka+1})}></Button>

            </View>
        )
    }
}

