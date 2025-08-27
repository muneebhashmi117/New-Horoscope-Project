import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {COLORS, TEXT_STYLE} from '../../enums/StyleGuide';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Inputfields = ({text, onChangeText, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.inputtext}>{text}</Text>
      <TextInput
        placeholder=""
        value={value}
        style={styles.input}
        onChangeText={onChangeText}
        keyboardType={text === 'Email' ? 'email-address' : 'default'}
        secureTextEntry={text === 'Password' || text === 'Confirm Password'}
        cursorColor={'black'}
      />
    </View>
  );
};

export default Inputfields;

const styles = StyleSheet.create({
  container: {
    marginVertical: hp('1.5%'),
    width: '100%',
  },
  inputtext: {
    ...TEXT_STYLE.bigTextMedium,
    marginBottom: hp('0.5%'),
    color: COLORS.black,
    fontSize: wp('3.7%'),
  },
  input: {
    borderWidth: 0.4,
    fontFamily: 'Poppins-Regular',
    borderColor: COLORS.lightGrey,
    ...TEXT_STYLE.smallTextMedium,
    fontSize: hp('2%'),
    borderRadius: 7,
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('1.2%'),
    width: '100%',
  },
});
