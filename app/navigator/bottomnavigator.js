import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Pressable, StyleSheet, View, Text, Platform, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { verticalScale, horizontalScale, moderateScale } from '../utils/common/Metrics';
import { CustomColors, CustomDimensions, CustomFonts, CustomFontSize } from '../utils/common/CustomStyles';
import HomeScreen from '../screens/mainScreen/homescreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Top = createMaterialTopTabNavigator();

const iconSize = 25;

export default function BottomTabNavigation() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={styles.container}>
      <Tab.Screen
        name="Production"
        component={HomeStack}
        options={{
          title: 'Production',
          tabBarIcon: ({ color, focused }) => {
            const iconSource = focused
              ? require("../../app/assets/mwimages/productionfocus.png")
              : require("../../app/assets/mwimages/productionnonfocus.png");

            return (
              <View style={{ marginBottom:focused ? verticalScale(30) : 0 }}>
              <Image
                style={styles.image}
                resizeMode="center"
                source={iconSource}
              />
              </View>
            );

          },
          tabBarLabel: ({ focused }) => (
            <View style={{ marginBottom: verticalScale(5) }}>
              <Text style={{ color: focused ? CustomColors.actionbar_clr : CustomColors.bordercolour }}>Analysis</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Energy"
        component={HomeStack}
        options={{
          title: 'Energy',
          tabBarIcon: ({ color, focused }) => {
            const iconSource = focused
              ? require("../../app/assets/mwimages/energyf.png")
              : require("../../app/assets/mwimages/energyuf.png");

            return (
              <View style={{ marginBottom:focused ? verticalScale(30) : 0 }}>
              <Image
                style={styles.image}
                resizeMode="center"
                source={iconSource}
              />
              </View>
            );

          },
          tabBarLabel: ({ focused }) => (
            <View style={{ marginBottom: verticalScale(5) }}>
              <Text style={{ color: focused ? CustomColors.actionbar_clr : CustomColors.bordercolour }}>Energy</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => {

            const iconSource = focused
              ? require("../../app/assets/mwimages/homef.png")
              : require("../../app/assets/mwimages/homeuf.png");

            return (
              <View style={{ marginBottom:focused ? verticalScale(30) : 0 }}>
                <Image
                  style={styles.image}
                  resizeMode="center"
                  source={iconSource}
                />
              </View>
            );
          },
          tabBarLabel: ({ focused }) => (
            <View style={{ marginBottom: verticalScale(5) }}>
              <Text style={{ color: focused ? CustomColors.actionbar_clr : CustomColors.bordercolour }}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Analysis"
        component={HomeStack}
        options={{
          title: "Analysis",
          tabBarIcon: ({ color, focused }) => {
            const iconSource = focused
              ? require("../../app/assets/mwimages/analysisf.png")
              : require("../../app/assets/mwimages/analysisuf.png");

            return (
              <View style={{ marginBottom:focused ? verticalScale(30) : 0 }}>
              <Image
                style={styles.image}
                resizeMode="center"
                source={iconSource}
              />
              </View>
            );
          },
          tabBarLabel: ({ focused }) => (
            <View style={{ marginBottom: verticalScale(5) }}>
              <Text style={{ color: focused ? CustomColors.actionbar_clr : CustomColors.bordercolour }}>Analysis</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={HomeStack}
        options={{
          title: "Menu",
          tabBarIcon: ({ color, focused }) => {
            const iconSource = focused
              ? require("../../app/assets/mwimages/menuf.png")
              : require("../../app/assets/mwimages/menuuf.png");

            return (
              <View style={{ marginBottom:focused ? verticalScale(30) : 0 }}>
              <Image
                style={styles.image}
                resizeMode="center"
                source={iconSource}
              />
              </View>
            );
          },
          tabBarLabel: ({ focused }) => (
            <View style={{ marginBottom: verticalScale(5) }}>
              <Text style={{ color: focused ? CustomColors.actionbar_clr : CustomColors.bordercolour }}>Menu</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: CustomColors.actionbar_clr,
        },
        contentStyle: { backgroundColor: CustomColors.white },

        headerTintColor: CustomColors.white,
      }}>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}




function Anbu() {
  return <Text >Anbu</Text>;
}

const styles = StyleSheet.create({
  container: {
    headerShown: false,
    tabBarActiveTintColor: CustomColors.button_colour,
    tabBarInactiveTintColor: CustomColors.button_colour,

    tabBarStyle: {
      height: verticalScale(70),

      borderColor: CustomColors.white,


      paddingTop: 5,
    },
    tabBarLabelStyle: {
      fontSize: 12,
      color: CustomColors.textcolour,
      paddingBottom: 10,
    },

    image: {
      aspectRatio: 2,
    },
    text: {
      fontSize: CustomFontSize.txt_12,
      fontFamily: CustomFonts.PoppinsRegular,
      lineHeight: verticalScale(20),
      color: CustomColors.txt
    },
  },
});
