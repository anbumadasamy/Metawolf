import { Platform } from "react-native";
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { moderateScale, verticalScale, horizontalScale } from "./Metrics";



export const CustomColors = {
  actionbar_clr:"#002d4d",
  metawolf_theme:"#f5b317",
  txt: "#191D23",
  bordercolour: '#B8C0CC',
  theme_yellow:"#f5b317",
  notify_red:"#ea4335",
  background_clr:"#0A003E",
  alert_round:"#FFC7CD",
  neutral_100:"#E7EAEE",
  neutral_200:'#A0ABBB',
  neutral_400:'#A0ABBB',
  neutral_500:'#64748B',
  neutral_700:"#323A46",
  neutral_800:"#191D23",
  neutral_600:'#4B5768',
  white: "#FFFFFF",
  new_theme_clr:"#5525A5",
  theme_clr: "#6F45B2",
  black: "#000",
  new_titile_clr:"#323A46",
  red: "#D8001E",
  font_clr: "#394151",
  error_red:'#F81D23',
  progress_clr:"#190480",
  smiley_bg:"#EBE4F4",
  info_bg:"#F59E0B",
  neutralgrey_200:"#D0D5DD",
  grey_bg:"#F7F8F9",
  info_bg2:"#FFFBEB",
  soft_pink:"#EBE4F4",
  yellow_alert:"#FEF3C7",
  yellow_800:"#92400E",
  whatsapp:"#008069",
  telegram: "#3390EC",
  neutralgrey_100: "#E7EAEE",
  lighttheme:"#CBBDE3",
  greyclrtxt: "#6D7689",
  back_button:"#A7ADB9",
  titile_txt:"#2a303c",
  title_clr:"#1B0480",
  orange:"#E77C1A",
  sandle: "#92400E",

  greysmiley:"#E7EAEE",
  mailhighlight:"#64748B",
  font_green:"#4DB37B",
  membershipt_clr:'#3F1897',
  oben_txt:"#485366",
  light_green:"#DBEBE1",
  faq_text:"#190480",
  extraof_clr:"#556176",
  pink:"#A992D1",
  sub_title:"#32128F",
  add_clr:'#5525A5',
  light_sandle: "#FEF3C7"

  


};




export const CustomFonts = {
  PoppinsBlackItalic: "Poppins Black Italic",
  PoppinsExtraBold: "Poppins ExtraBold",
  PoppinsLight: "Poppins Light",
  PoppinsMedium: "Poppins Medium",
  PoppinsRegular: 'Poppins Regular',
  PoppinsBold: "Poppins Bold",
  PoppinsSemiBold: "Poppins SemiBold",

  RobotoSlabBlack: "Roboto Slab Black",
  RobotoSlabBold: "Roboto Slab Bold",
  RobotoSlabExtraBold: "Roboto Slab ExtraBold",
  RobotoSlabExtraLight: "Roboto Slab ExtraLight",
  RobotoSlabLight: "Roboto Slab Light",
  RobotoSlabMedium: "Roboto Slab Medium",
  RobotoSlabRegular: "Roboto Slab Regular",
  RobotoSlabSemiBold: "Roboto Slab SemiBold",
  RobotoSlabThin: "Roboto Slab Thin",


  ComfortaaBold: "Comfortaa Bold",
  ComfortaaLight: "Comfortaa Light",
  ComfortaaMedium: "Comfortaa Medium",
  ComfortaaRegular: "Comfortaa Regular",
  ComfortaaSemiBold: "Comfortaa SemiBold",

  OpenSansCondensedLightItalic: "Open Sans Condensed Light Italic",
  OpenSansCondensedBold: "Open Sans Condensed Bold",

};


export const CustomFontSize = {
  txt_12 : verticalScale(12),
  txt_14 : verticalScale(14),
  txt_18 : verticalScale(18),
  txt_22: verticalScale(22),
  txt_8: verticalScale(8),
  txt_5: verticalScale(5),





  title: verticalScale(16),
  large_title: verticalScale(24),
  size_32: verticalScale(32),
  verylarge_title: verticalScale(20),
  normal: verticalScale(14),
  normal_12: verticalScale(12),
 
  txt_10: verticalScale(10),
  
  small: verticalScale(12),

};

export const CustomDimensions = {
  screenWidth: width,
  screenHeight: height,
  icon_width_10:horizontalScale(10),
  icon_height_10:verticalScale(10),
  icon_width_15:horizontalScale(15),
  icon_height_15:verticalScale(15),
  icon_width_20:horizontalScale(20),
  icon_width_25:horizontalScale(25),
  icon_height_20:verticalScale(20),
  icon_height_25:verticalScale(25),
  icon_width_30:horizontalScale(30),
  icon_height_30:verticalScale(30),
  icon_width_40:horizontalScale(40),
  icon_height_40:verticalScale(40),
  icon_width_50:horizontalScale(50),
  icon_height_50:verticalScale(50),
  icon_width_70:horizontalScale(70),
  icon_height_70:verticalScale(70),


  icon_20: 20,
  icon_30: 30,
  icon_40: 40,
  icon_50:50,
  icon_60:60,
  // mar_16p:"16%",
  mar_5: 5,
  mar_10: 10,
  mar_20: 20,
  pad_10: 10,
  pad_15: 15,
  pad_20: 20,
  pad_30:30,
  brad_8: 8,
  brad_32: 32,
  bw_1: 1,
  w_40: 40,
  h_40: 40,
  r_40: 40,

  w_60: 60,
  h_60: 60,
  r_60: 60,



}
