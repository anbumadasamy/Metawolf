import * as React from 'react';
import { View, Image, Linking } from 'react-native';
import { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector, useDispatch } from 'react-redux';
import { setinternetstatus } from '../store/value';
import BottomTabNavigation from './bottomnavigator';
import BootSplash from 'react-native-bootsplash';
import NetInfo from '@react-native-community/netinfo';
import { CustomColors } from '../utils/common/CustomStyles';
import MetaWolfLogin from '../screens/loginscreen/metawolflogin';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Navigator() {
  const token = useSelector(
    state => state.operation.authentication?.access_token,
  );
  const Istatus = useSelector(state => state.operation?.internet);
  const setRedux = useDispatch();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setRedux(setinternetstatus({ internet: state.isConnected }));
    });
    return () => {
      unsubscribe();
    };
  }, []);



  return (
    <NavigationContainer onReady={() => BootSplash.hide({ fade: true })}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: CustomColors.actionbar_clr,
          },
          headerTintColor: CustomColors.white,
          headerShown: false,
          contentStyle: { backgroundColor: CustomColors.white },
        }}>
        {Istatus ? (
          !token ? (
            <>
              <Stack.Screen name="log" component={MetaWolfLogin} />
            </>
          ) : (
            <>
              <Stack.Screen name="main" component={BottomTabNavigation} />
            </>
          )
        ) : (
          <>
            <Stack.Screen name="net" component={NoInternet} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function NoInternet() {
  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        backgroundColor: CustomColors.white,
      }}>
      <Image
        style={{ width: '80%', height: '50%' }}
        resizeMode="center"
        source={require('./../assets/mwimages/nointernet.png')}
      />
    </View>
  );
}

export default Navigator;
