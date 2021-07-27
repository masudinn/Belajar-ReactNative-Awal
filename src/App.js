import React, { useState,useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import Communication from './pages/Communication';
import Position from './pages/Position';
import SampleStyling from './pages/Styling';
import Props from './pages/PropsDinamis/index';
import StateDinamis from './pages/StateDinamis';
import Cart from './componen/cart';
import Produk from './componen/produk';
import BasicJavascript from './pages/BasicJavascript';


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
        {/* <SimpleComponen /> */}
        {/* <SampleComponen />
        {/* {isShow && <FlexBox />} */}
        {/* <SampleStyling /> */}
        {/* <Position/> */}
        {/* <Props/>
        {/* <StateDinamis/> */}
        {/* <Cart/>
        <Produk/> */}
        {/* <Communication/> */}
        <BasicJavascript/>
      </ScrollView>
    </View>
  );

};

export default App;
