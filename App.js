import React from 'react';
import { View, ScrollView } from 'react-native';
import FlexBox from './FlexBox';
import SampleComponen from './SampleComponen';
import SampleStyling from './SampleStyling';
import SimpleComponen from './SimpleComponen';

const App = () => {
  return (
    <View>
      <ScrollView>
        <SimpleComponen />
        <SampleComponen />
        <SampleStyling />
        <FlexBox />
      </ScrollView>
    </View>
  );

};

export default App;
