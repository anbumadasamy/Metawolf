import { TextInput, StyleSheet, View, Pressable, Text, Image } from 'react-native';
import {
  CustomColors,
  CustomFontSize,
  CustomFonts,
} from '../../utils/common/CustomStyles';
import {
  verticalScale,
  horizontalScale,
  moderateScale,
} from '../../utils/common/Metrics';

import { Dimensions } from 'react-native';

const { width, } = Dimensions.get('window');

export default function MwActionBar({ onPress, txt }) {


  return (
    <>
      <View style={styles.circle}>
      </View>
      <View>
        <View style={styles.container}>
          <Image
            style={styles.image}
            resizeMode="center"
            source={require("../../assets/mwimages/setup.png")}
          />
          <Image
            style={styles.logo}
            resizeMode="center"
            source={require("../../assets/mwimages/logowhite.png")}
          />
          <Image
            style={styles.image}
            resizeMode="center"
            source={require("../../assets/mwimages/share.png")}
          />
        </View>
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  container:
    { backgroundColor: "transparent", flexDirection: "row", justifyContent: 'space-between', alignItems: "center" }

  ,

  ttiletxt: {
    color: CustomColors.white,
    fontSize: CustomFontSize.title,
    fontFamily: CustomFonts.PoppinsMedium,
  },
  image: {
    width: horizontalScale(50),
    height: verticalScale(50),
    marginLeft: "5%",
    marginRight: "5%",
  },
  logo: {
    width: horizontalScale(200),
    height: verticalScale(100)
  },
  circle: { width: width + width, height: width + width, borderBottomLeftRadius: width + width, borderBottomRightRadius: width + width, backgroundColor: CustomColors.actionbar_clr, position: "absolute", top: "-80%", right: -width + width / 2 }
});
