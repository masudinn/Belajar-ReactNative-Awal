import React,{Component, Profiler} from 'react';
import {Text, View, Image, TextInput,StyleSheet} from 'react-native';
import hewan from './rusa.jpeg';

const App = () => {
  return(
  // <SampleComponen/>
  <StyleReactNative/>
  );
    
};


const SampleComponen = () =>{
  return (
    <View>
      <Home/>
      <Foto/>
    </View>
  )
}

const Home = () => {
  return (
    <View>
      <Text>hdoro</Text>
      <Text>hdoro</Text>
    </View>
  );
};

const Foto = () => {
  return(
    <View>
      <Image source = {{uri : 'https://placeimg.com/100/100/animals'}} style = {{width : 100, height : 100}} />
      <TextInput style={{borderWidth:1}}/>
      <BoxGreen/>
      <Profile/>
    </View>
  );
}



class BoxGreen extends Component{
    render(){
      return(
        <Text>ini componen class</Text>
      )
    }
}

class Profile extends Component{
  render(){
    return (
      <View>
      <Image source = {{uri : 'https://placeimg.com/100/100/animals'}} style = {{width : 100, height:100, borderRadius : 50}}/>
      <Text> ini hewan kucing </Text>
      
     
      </View>
    )
  }
}


const StyleReactNative = () => {
  return(
    <View >
      <Text style = {styles.text}>haihaihai</Text>
      <View style ={{
        marginBottom :20,
        width : 100, 
        height:100, 
        backgroundColor:'#4287f5', 
        borderWidth : 3, 
        borderColor : '#9042f5'}}/>
      <View style={{padding:12 ,backgroundColor:'#f2f2f2',width:212 ,borderRadius:10}}>
      
        <Image source={hewan} style = {{width : 188, height : 107,borderRadius:10}}/>
        <Text style={{fontSize:14,fontWeight:'bold',marginTop:10}}>Harimau 1212</Text>
        <Text style={{fontSize:14,fontWeight:'bold',paddingVertical:10, color:'#1bc44b'}}>Rp 1 M</Text>
        <Text style={{fontSize:14,fontWeight:'bold',marginTop:10}}>Sragen</Text>
        <View style={{marginTop:20,backgroundColor:'#ffff',borderRadius:10,padding:5}}>
          <Text style={{textAlign:'center'}}>Beli</Text>
        </View>

      </View>
    </View>

    
  )
}

const styles = StyleSheet.create({
  text : {
    fontSize : 18,
    fontWeight : 'bold',
    color : '#9042f5'
  }
})
export default App;