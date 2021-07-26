import React, { useState,useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import Props from './pages/PropsDinamis/index';
import StateDinamis from './pages/StateDinamis';


const App = () => {
  // const[isShow, setIsShow] = useState(true);
  // useEffect(() => {
  //   setTimeout(()=>{
  //     setIsShow(false)
  //   },6000)
  // }, []);
  return (    
    <View>
      <ScrollView>
        {/* <SimpleComponen />
        <SampleComponen />
        <SampleStyling /> */}
        {/* {isShow && <FlexBox />} */}
        {/* <Position/> */}
        {/* <Props/> */}
        <StateDinamis/>
      </ScrollView>
    </View>
  );

};

export default App;
