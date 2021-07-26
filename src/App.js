import React, { useState,useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import FlexBox from './pages/FlexBox/index';


const App = () => {
  const[isShow, setIsShow] = useState(true);
  useEffect(() => {
    setTimeout(()=>{
      setIsShow(false)
    },6000)
  }, []);
  return (    
    <View>
      <ScrollView>
        {/* <SimpleComponen />
        <SampleComponen />
        <SampleStyling /> */}
        {isShow && <FlexBox />}
        {/* <Position/> */}
      </ScrollView>
    </View>
  );

};

export default App;
