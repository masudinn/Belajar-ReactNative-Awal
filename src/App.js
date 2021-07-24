import React from 'react';
import { View, ScrollView } from 'react-native';
import FlexBox from './pages/FlexBox/index';
import Position from './pages/Position/index';
import SampleComponen from './pages/Komponen/SampleComponen';
import SampleStyling from './pages/Styling/index';
import SimpleComponen from './pages/Komponen//SimpleComponen';

const App = () => {
  return (
    <View>
      <ScrollView>
        <SimpleComponen />
        <SampleComponen />
        <SampleStyling />
        <FlexBox />
        <Position/>
      </ScrollView>
    </View>
  );

};

export default App;
