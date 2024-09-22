import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaView, StatusBar, Platform, View } from 'react-native';

import Navigator from './app/navigator/navigator';

import { CustomColors } from './app/utils/common/CustomStyles';

function App() {

  return (
    
      <SafeAreaView style={{ flex: 1, backgroundColor: CustomColors.actionbar_clr }}>
        <StatusBar
          backgroundColor={CustomColors.actionbar_clr}
          barStyle={"default"}
        />
       
          <Navigator></Navigator>
       

      </SafeAreaView>
   

  );
}

export default App;
