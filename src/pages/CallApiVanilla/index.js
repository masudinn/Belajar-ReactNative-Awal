import React,{useEffect, useState} from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'

export default function CallApiVanilla() {
    //useEffect(() => {
    //metod get
    // fetch('https://reqres.in/api/users/2')
    // .then(response => response.json())
    //     .then(json => console.log(json))
        
    //metod post
    //https://reqres.in/api/users
    //     const data = {
    //         "name": "morpheus",
    //         "job": "leader"
    //     }
        
    //     //perbedaan json data dengan json string
    //     console.log('ini json object', data);
    //     console.log('ini json string', JSON.stringify(data));

    //     fetch('https://reqres.in/api/users', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(data)
    //     })
    //         .then(response => response.json())
    //         .then(json => { console.log('post response : ', json) })
    // }, []);
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
        fetch('https://reqres.in/api/users/2')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setDataUser(json.data)
            })
    }

    const postData = () => {

        const dataUser = {           
        "name": "morpheus",
        "job": "leader"
        }

        fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body : JSON.stringify(dataUser)
        })
            .then(response => response.json())
            .then(json => {
                console.log('Post Response : ', json)
                setDataPostUser(json)
            })
    }

    return (
        <View style={styles.wrapper}>
            <Text style={{textAlign:'center',fontWeight:'bold',marginBottom:20}}>Latihan call api</Text>
            <Button title = 'Get Data' onPress={getData} />
            <Text>Response Get data : </Text>

            <Image style={{ width: 100, height: 100 }} source={{ uri:`${dataUser.avatar}` }} />
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
