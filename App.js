import React,{Component, Profiler} from 'react';
import {Text, View, Image, TextInput,StyleSheet} from 'react-native';

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
    <View>
      <Text style = {styles.text}>haihaihai</Text>
      <View style ={{
        width : 100, 
        height:100, 
        backgroundColor:'#4287f5', 
        borderWidth : 3, 
        borderColor : '#9042f5',
        marginTop : 20}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  text : {
    fontSize : 18,
    fontWeight : 'bold',
    color : '#9042f5',
    margin : 120
  }
})
export default App;