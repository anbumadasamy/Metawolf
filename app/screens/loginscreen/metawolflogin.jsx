import { View, StyleSheet, ScrollView, Alert, Dimensions, Image, Text, TextInput, Pressable } from 'react-native';
import { useEffect, useState, useReducer } from 'react';
import { CustomColors, CustomFontSize, CustomFonts, CustomDimensions } from '../../utils/common/CustomStyles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { horizontalScale, verticalScale, moderateScale } from '../../utils/common/Metrics';
import MailInput from '../../common/mwtextinput/mailinput';
import PassInput from '../../common/mwtextinput/passinput';
import MwLoginButton from '../../common/mwbutton/mwloginbutton';
import { setAuthentication } from '../../store/value';



const SPReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, ...action.fields };
    default:
      return state;
  }
};

export default function MetaWolfLogin({ route }) {
  const navigation = useNavigation();
  const setRedux = useDispatch();

  const [formState, dispatch] = useReducer(SPReducer, {
    mail: "",
    pass: "",
  });

  const handleChange = fields => {
    dispatch({ type: 'SET_FIELD', fields });
  };

  function validation() {
    if (formState.mail != "" && formState.pass != "") {
      setRedux(setAuthentication({
        userdata: {
          "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiMjMyN2EyZDk0NmIwNDk5NzAxY2Q3YTFlMDkwYmUwM2ZjM2Y1OWMxMzdhM2ViYTVhM2IxZWMxNmMxODViNTU0YmQ3NThhMTBkYTNjNmMzODQiLCJpYXQiOjE3MjY5MTMzMzYuNTExNDUxLCJuYmYiOjE3MjY5MTMzMzYuNTExNDUzLCJleHAiOjE3NTg0NDkzMzYuNDU3NDk5LCJzdWIiOiIxMSIsInNjb3BlcyI6W119.hkuqrVry47k1uLawgQOqr_gcKgeJxB2Dd3z_UfndVyDF3q2XWrtgWKYDQISugZdVEPJ14z0plHzhoIE93ieBhWIygO7ov5DV-vmh0S7duA6dmmGi4r1qtaw3H4b8IgQla_ZYD7kei4DsyPk-pVqNdYRW79T1A2cAb6VejHlP8yxxd6x1_mPwxEgubvzdA6R74JOgqoR4DX0FrPYCPTDa7loxOMU0bKRJy_4U-JHE-XOFejL1Zn7rAbcly8XsEbY2oIX-JlMc1OgRkRL4rQ4jna0qRRU7syAg6r9eWQVOSdX4wyloXNqOuw18VqDY3PKmB-uEhl8lQrvO4Nn-BVOs8y8bGrfUcvfr5zqFjozMR10exuANNkOdHCBXCwHUrv9Ieai23BQzi0r02xohdYp0gUIGbxLA_DVbPSYuvQmQj5pZkUsB67w2cLPjEUqgS-LeSlNhmNyjeljzJHQbL5NVZFGuxp3dcenWFSYHvirq923XkmgJSUOLgJe1MlkB2j19agZyqFNg2goD38vIwHWdKfnpSp7f-Cf6rls7r8m0VCb2vSWVNp5kRC7LxjISAwg3oi2DL6l8yUl99Zg5HXqjVrQxoGWt2O1KQ8zhsSD8rNmgkSXwYF2NYwehj_F5nXr6CfaSIqylncZzCy4z40GmhvQDPzC9qJMiYQBiu4rchJc",
          "user": {
            "id": 11,
            "name": "Anbu",
            "email": "anbu@metawolf.com",
          },
        }
      }))

    }
    else {
      Alert.alert("Error", "Email and Password cant null")

    }

  }



  return (
    <>
      <View style={styles.container}>
        <View style={styles.align_cenrer}>
          <Image
            style={styles.image}
            resizeMode="center"
            source={require("../../assets/mwimages/german.png")}
          />
        </View>
        <View style={styles.marginHorizontal}>
          <Text style={styles.text}>
            Welcome to <Text style={styles.logo_text}> Metawolf Solar</Text>
          </Text>
          <View style={styles.marginTop}>
            <Text style={styles.text}>let's get started</Text>
          </View>
        </View>
        <View style={styles.logindetailscontainer}>
          <View style={styles.img_container}>
            <Image
              style={styles.logo_image}
              resizeMode="center"
              source={require("../../assets/mwimages/clrlogo.png")}
            />
          </View>
          <View style={styles.txt_container}>
            <MailInput value={formState.mail} hint={"email"} onChangeText={(param) => {
              handleChange({ mail: param })
            }} ></MailInput>

          </View>
          <View style={styles.txt_container}>
            <PassInput value={formState.pass} hint={"password"} onChangeText={(param) => {
              handleChange({ pass: param })
            }} ></PassInput>

          </View>
          <View style={styles.align_cenrer}>
            <Text style={styles.forgot}>Forgot Password ?</Text>
          </View>
          <MwLoginButton value={"Login"} onPress={validation}></MwLoginButton>

          <Pressable style={styles.txt2_container}>
            <Text style={styles.text2}>
              Dont have access,<Text style={styles.bold_txt}> Register a new account</Text>
            </Text>
          </Pressable>


        </View>
        <View style={styles.apple_container}>
          <Image
            style={styles.image}
            resizeMode="center"
            source={require("../../assets/mwimages/apple.png")}
          />
        </View>

      </View>


    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height, backgroundColor: CustomColors.actionbar_clr,

  },
  align_cenrer: {
    alignItems: "center"
  },
  img_container: {
    alignItems: "center",
    marginTop: "10%",
    bottom: "2%",

  },
  apple_container: {

    position: "absolute",
    bottom: "10%",
    alignItems: "center",
    width: "100%",


  },
  txt2_container: {
    alignItems: "center",
    textAlign: "center",

  },
  marginHorizontal: {
    marginHorizontal: "5%",
  },
  marginTop: {
    marginTop: "2%",
  },
  txt_container: {
    marginBottom: "5%",
    marginHorizontal: "5%",
  },
  image: {
    width:horizontalScale(170),
    height:verticalScale(100),
  },
  logo_image: {
    width:horizontalScale(300),
    height:verticalScale(100),
  },
  text: {
    fontSize: CustomFontSize.txt_14,
    fontFamily: CustomFonts.PoppinsRegular,
    lineHeight: verticalScale(24),
    color: CustomColors.white
  },
  logo_text: {
    fontSize: CustomFontSize.txt_22,
    fontFamily: CustomFonts.PoppinsSemiBold,
    lineHeight: verticalScale(24),
    color: CustomColors.metawolf_theme
  },
  logindetailscontainer: {
    backgroundColor: CustomColors.white,
    borderWidth: 1, borderTopRightRadius: moderateScale(40),
    borderTopLeftRadius: moderateScale(40),
    height: "100%",
    marginTop: verticalScale(20),
  },
  forgot: {
    fontSize: CustomFontSize.txt_12,
    fontFamily: CustomFonts.PoppinsRegular,
    lineHeight: verticalScale(24),
    color: CustomColors.bordercolour,
    marginTop: "2%",
  },

  text2: {
    fontSize: CustomFontSize.txt_12,
    fontFamily: CustomFonts.PoppinsRegular,
    lineHeight: verticalScale(20),
    color: CustomColors.txt
  },
  bold_txt: {
    fontSize: CustomFontSize.txt_12,
    fontFamily: CustomFonts.PoppinsSemiBold,
    lineHeight: verticalScale(20),
    color: CustomColors.txt
  },






});
