import { Pressable, StyleSheet, Text, View } from 'react-native';
import { CustomColors, CustomDimensions, CustomFontSize, CustomFonts } from '../../utils/common/CustomStyles';
import { verticalScale, horizontalScale, moderateScale } from '../../utils/common/Metrics';

export default function MwLoginButton({ onPress, value }) {

  return (
    <View style={styles.whole_container}>
      <Pressable
        style={styles.container}
        android_ripple={styles.ripple_colour}
        onPress={onPress}>
        <Text style={styles.button}>{value}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: CustomColors.actionbar_clr,
    paddingHorizontal: horizontalScale(60),
    paddingVertical: verticalScale(15),
    borderRadius: moderateScale(16),
  },

  whole_container: {
    margin: verticalScale(15),
    alignSelf:"center",

  },

  button: {
    color: CustomColors.theme_yellow,
    fontSize: CustomFontSize.title,
    fontFamily: CustomFonts.PoppinsSemiBold,
    alignSelf: 'center',
    lineHeight: verticalScale(19),
  },
});
