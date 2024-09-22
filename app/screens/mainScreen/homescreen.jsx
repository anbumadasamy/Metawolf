import { View, StyleSheet, ScrollView, Alert, Dimensions, Text, Image, Pressable } from 'react-native';
import { useReducer } from 'react';
import { useNavigation } from '@react-navigation/native';
import MwActionBar from '../../common/ActionBar/mwactionbar';
import { horizontalScale, moderateScale, verticalScale } from '../../utils/common/Metrics';
import { CustomColors, CustomDimensions, CustomFonts, CustomFontSize } from '../../utils/common/CustomStyles';


const SPReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, ...action.fields };
    default:
      return state;
  }
};

export default function HomeScreen({ route }) {
  const navigation = useNavigation();

  const [formState, dispatch] = useReducer(SPReducer, {
    s_plate: true,
    m_charge: false,
    petrol: false,
    grid: false,
  });

  const handleChange = fields => {
    dispatch({ type: 'SET_FIELD', fields });
  };



  return (
    <>
      <View style={{ height: Dimensions.get('window').height, width: "100%" }}>
        <MwActionBar></MwActionBar>
        <View style={styles.noticontainer}>
          <View style={styles.charge_container}>
            <View style={styles.charge_notify}>
              <Text style={styles.text}>3</Text>
            </View>
            <Image
              style={styles.image}
              resizeMode="center"
              source={require("../../assets/mwimages/charge.png")}
            />
          </View>
          <View style={styles.charge_container}>
            <View style={styles.tem_notify}>
              <Text style={[styles.text, { color: CustomColors.txt }]}>14°C"</Text>
            </View>
            <Image
              style={styles.image}
              resizeMode="center"
              source={require("../../assets/mwimages/temperature.png")}
            />
          </View>
        </View>
        <View style={{ alignItems: "center", }}>
          <View style={styles.centerimgcontainer}>

            <View style={styles.centerimgcontainertwo}>
              <Image
                style={styles.frame}
                resizeMode="stretch"
                source={require("../../assets/mwimages/frame.png")}
              />
            </View>

            <Pressable style={[styles.icons, { top: 0, left: 10 }]} onPress={() => {
              handleChange({ s_plate: true, m_charge: false, petrol: false, grid: false })
            }}>
              <View style={styles.icon_txtcontainer}>

                {formState.s_plate ?

                  <Image
                    style={styles.bigimage}
                    resizeMode="center"
                    source={require("../../assets/mwimages/sloarplatef.png")}
                  />

                  :
                  <Image
                    style={styles.bigimage}
                    resizeMode="center"
                    source={require("../../assets/mwimages/sloarplate.png")}
                  />
                }
                <View style={styles.txt_container}>
                  <Text style={styles.number}>5.90kw</Text>
                  <Text style={styles.titile}>Sloar Power now</Text>
                </View>
              </View>


            </Pressable>

            <Pressable style={[styles.icons, { top: 0, right: 10 }]} onPress={() => {
              handleChange({ s_plate: false, m_charge: true, petrol: false, grid: false })
            }}>
              <View style={styles.icon_txtcontainer}>
                {formState.m_charge ?
                  <Image
                    style={styles.bigimage}
                    resizeMode="center"
                    source={require("../../assets/mwimages/mobilecf.png")}
                  />
                  :
                  <Image
                    style={styles.bigimage}
                    resizeMode="center"
                    source={require("../../assets/mwimages/mobilec.png")}
                  />
                }
                <View style={styles.txt_container}>
                  <Text style={styles.number}>85%</Text>
                  <Text style={styles.titile}>Discharging</Text>
                </View>
              </View>
            </Pressable>
            <Pressable style={[styles.icons, { bottom: 0, right: 10 }]} onPress={() => {
              handleChange({ s_plate: false, m_charge: false, petrol: false, grid: true })
            }}>
              <View style={styles.icon_txtcontainer}>
                {formState.grid ?
                  <Image
                    style={styles.bigimage}
                    resizeMode="center"
                    source={require("../../assets/mwimages/gridf.png")}
                  />
                  :
                  <Image
                    style={styles.bigimage}
                    resizeMode="center"
                    source={require("../../assets/mwimages/grid.png")}
                  />

                }
                <View style={styles.txt_container}>
                  <Text style={styles.number}>1.90kw</Text>
                  <Text style={styles.titile}>grid</Text>
                </View>
              </View>
            </Pressable>
            <Pressable style={[styles.icons, { bottom: 0, left: 10 }]} onPress={() => {
              handleChange({ s_plate: false, m_charge: false, petrol: true, grid: false })
            }}>
              <View style={styles.icon_txtcontainer}>
                {formState.petrol ?
                  <Image
                    style={styles.bigimage}
                    resizeMode="center"
                    source={require("../../assets/mwimages/petrolf.png")}
                  />
                  :
                  <Image
                    style={styles.bigimage}
                    resizeMode="center"
                    source={require("../../assets/mwimages/petrol.png")}
                  />
                }
                <View style={styles.txt_container}>
                  <Text style={styles.number}>2.90kw</Text>
                  <Text style={styles.titile}>Charging</Text>
                </View>
              </View>
            </Pressable>

          </View>

        </View>


        <View style={styles.stxtcontainer}>
          <Text style={styles.stext}>System Status</Text>
        </View>

      </View>


    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stxtcontainer: {
    alignItems: "center",

  },
  image: {
    width: horizontalScale(50),
    height: verticalScale(50),
  },
  bigimage: {
    width: horizontalScale(100),
    height: verticalScale(100),
  },
  noticontainer: { flexDirection: "row", justifyContent: "space-between", marginTop: "20%", marginHorizontal: "5%", },
  text: {
    fontSize: CustomFontSize.txt_14,
    fontFamily: CustomFonts.PoppinsSemiBold,
    lineHeight: verticalScale(20),
    color: CustomColors.white
  },
  charge_container: { width: horizontalScale(70), height: verticalScale(80) },
  charge_notify: { width: horizontalScale(20), height: verticalScale(20), borderRadius: moderateScale(20), backgroundColor: CustomColors.notify_red, position: "absolute", right: 0, top: -10, alignItems: "center" },
  tem_notify: { width: horizontalScale(20), height: verticalScale(20), borderRadius: moderateScale(20), position: "absolute", right: 20, top: -10, alignItems: "center" },
  stext: {
    fontSize: CustomFontSize.txt_18,
    fontFamily: CustomFonts.PoppinsRegular,
    lineHeight: verticalScale(20),
    color: CustomColors.bordercolour
  },
  frame: {
    width: horizontalScale(200),
    height: verticalScale(200),
  },
  centerimgcontainer:
    { width: horizontalScale(350), alignItems: "center", height: verticalScale(300), },
  centerimgcontainertwo: { position: 'absolute', top: verticalScale(50) },
  icons:
    { position: "absolute", },
  number: {
    fontSize: CustomFontSize.txt_10,
    fontFamily: CustomFonts.PoppinsSemiBold,
    lineHeight: verticalScale(11),
    color: CustomColors.theme_yellow
  },
  titile: {
    fontSize: CustomFontSize.txt_5,
    fontFamily: CustomFonts.PoppinsSemiBold,
    lineHeight: verticalScale(10),
    color: CustomColors.txt
  },
  txt_container: {
    position: "absolute", bottom: verticalScale(20), alignItems: "center"
  },
  icon_txtcontainer: { alignItems: "center", height: verticalScale(100) }







});
