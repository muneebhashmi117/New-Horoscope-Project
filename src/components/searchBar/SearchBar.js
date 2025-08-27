import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { SVG } from '../../assets';
import { COLORS } from '../../enums/StyleGuide';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      {/* Left: Search icon + Input */}
      <View style={styles.searchSection}>
        <SVG.searchicon style={styles.searchIcon} width={30} height={30} />
        <TextInput
          style={styles.input}
          placeholder="Search here"
          placeholderTextColor={COLORS.grey}
          cursorColor={COLORS.black}
        />
      </View>

      {/* Right: Reverse button */}
      <TouchableOpacity style={styles.reserveBtn}>
        <Text style={styles.reserveText}>Reserve a Table</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 8,
    borderWidth: 0.4,
   borderColor: COLORS.lightGrey,
    paddingHorizontal: wp('1%'),
    paddingVertical: hp('0%'),
    marginHorizontal:'5%',
    marginTop:10,
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  searchIcon: {
    marginRight: wp('2%'),
    marginLeft: wp('3.5%'),
  },
  input: {
    flex: 1,
    fontSize: hp('2%'),
    color: COLORS.black,
    fontFamily: 'Poppins-Regular',
    marginTop:hp('0.3%')
  },
  reserveBtn: {
    backgroundColor: COLORS.black,
    paddingVertical: hp('0.9%'),
    paddingHorizontal: wp('2%'),
    borderRadius: 4,
    marginLeft: wp('2%'),
    marginRight: wp('2%'),
  },
  reserveText: {
    color: COLORS.white,
    fontFamily: 'Poppins-Medium',
    fontSize: hp('1.6%'),
  },
});
