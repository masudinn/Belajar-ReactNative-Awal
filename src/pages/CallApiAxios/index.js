import axios from 'axios';
import React,{useState} from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'

export default function CallApiAxios() {
    const [dataUser, setDataUser] = useState({
        'avatar': '',
        'email': '',
        'first_name': '',
        'last_name': ''
    });

    const [dataPostUser, setDataPostUser] = useState({
        'name': '',
        'job' : ''
    })

    const getData = () => {
        // fetch('https://reqres.in/api/users/2')
        //     .then(response => response.json())
        //     .then(json => {
        //         console.log(json)
        //         setDataUser(json.data)
        //     })

        //axios
        axios.get('https://reqres.in/api/users/3')
            .then(hasil => setDataUser(hasil.data.data))
            .catch(err => console.log('error : ',err));
    }

    const postData = () => {

        const dataUser = {           
        "name": "morpheus",
        "job": "leader"
        }

        // fetch('https://reqres.in/api/users', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body : JSON.stringify(dataUser)
        // })
        //     .then(response => response.json())
        //     .then(json => {
        //         console.log('Post Response : ', json)
        //         setDataPostUser(json)
        //     })
        axios.post('https://reqres.in/api/users', dataUser)
            .then(result => setDataPostUser(result.data))
            .catch(err => console.log("error : ", err))
    }

    return (
        <View style={styles.wrapper}>
            <Text style={{textAlign:'center',fontWeight:'bold',marginBottom:20}}>Latihan call api axios</Text>
            <Button title = 'Get Data' onPress={getData} />
            <Text>Response Get data : </Text>
            {dataUser.avatar.length > 0 && (
            <Image style={{ width: 100, height: 100 }} source={{ uri:`${dataUser.avatar}` }} />
            ) }
            <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
            <Text>{dataUser.email}</Text>

            <Text style={{height:1,backgroundColor:'black',marginTop:20}}></Text>
        
            <Button onPress={postData} title='Post Data' />
            <Text>Response Post Data: </Text>
            <Text>{dataPostUser.name}</Text>
            <Text>{dataPostUser.job}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding:20
    }
})
