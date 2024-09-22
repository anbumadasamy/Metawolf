import { TextInput, StyleSheet, Text } from 'react-native';
import { CustomColors, CustomFontSize, CustomFonts, CustomDimensions } from '../../utils/common/CustomStyles';
import { horizontalScale, verticalScale, moderateScale } from '../../utils/common/Metrics';


export default function MailInput({ hint, onChangeText, value, title }) {
  return (
    <>
      <TextInput style={styles.textinput} placeholder={hint} inputMode={"email"}
        placeholderTextColor={CustomColors.bordercolour} value={value} onChangeText={onChangeText}>
      </TextInput>
    </>
  );
}

const styles = StyleSheet.create({
  textinput: {
    color: CustomColors.txt,
    borderBottomWidth: moderateScale(1),
    borderColor: CustomColors.bordercolour,
    paddingRight: horizontalScale(10),
    borderRadius: moderateScale(8),
    fontSize: CustomFontSize.normal,
    fontFamily: CustomFonts.PoppinsRegular,
    paddingVertical: verticalScale(10),
    
  },
});
