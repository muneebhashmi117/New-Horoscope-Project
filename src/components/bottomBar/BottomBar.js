import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SVG} from '../../assets';
import {COLORS} from '../../enums/StyleGuide';
import {SCREEN} from '../../enums';

const BottomBar = ({navigation, state}) => {
  return (
    <View style={styles.maincontainer}>
      <Pressable
        style={styles.iconTextWrapper}
        onPress={() => navigation.navigate(SCREEN.BOOKINGS_SCREEN)}>
        <SVG.bookings />
        <Text style={styles.textStyle}>Bookings</Text>
      </Pressable>

      <Pressable
        style={[styles.iconTextWrapper, styles.rewardsWrapper]}
        onPress={() => navigation.navigate(SCREEN.REWARDS_SCREEN)}>
        <SVG.rewards />
        <Text style={styles.textStyle}>Rewards</Text>
      </Pressable>

      <View style={styles.centerButtonWrapper}>
        {/* <View style={styles.whiteBackgroundPatch} /> */}
        <Pressable
          style={styles.menuButton}
          onPress={() => navigation.navigate(SCREEN.HOME_SCREEN)}>
          <SVG.menuicon />
        </Pressable>
      </View>

      <Pressable
        style={[styles.iconTextWrapper, styles.searchWrapper]}
        onPress={() => navigation.navigate(SCREEN.SEARCH_SCREEN)}>
        <SVG.bottomsearchicon />
        <Text style={styles.textStyle}>Search</Text>
      </Pressable>

      <Pressable
        style={styles.iconTextWrapper}
        onPress={() => navigation.navigate(SCREEN.PROFILE_SCREEN)}>
        <SVG.user />
        <Text style={styles.textStyle}>Profile</Text>
      </Pressable>
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  maincontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: hp(7.5),
    backgroundColor: COLORS.white,
    position: 'relative',
    paddingBottom: hp(1),
    borderWidth: 1,
    borderColor: COLORS.lightGrey,
    paddingTop: hp(2),
  },
  iconTextWrapper: {
    alignItems: 'center',
  },
  rewardsWrapper: {
    marginRight: wp(8.5),
  },
  searchWrapper: {
    marginLeft: wp(8.5),
  },
  textStyle: {
    fontSize: wp(2.5),
    color: COLORS.grey,
    marginTop: hp(0.5),
    fontFamily: 'Poppins-Regular',
  },
 centerButtonWrapper: {
  position: 'absolute',
  top: -hp(7),
  left: '50%',                // ✅ Screen ka exact center
  transform: [{ translateX: -wp(8) }], // ✅ Apne button ka aadha width minus
  backgroundColor: COLORS.shadow,
  borderRadius: wp(12),
  padding: wp(2),
  elevation: 2,
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  borderWidth: 1,
  borderColor: COLORS.lightestGrey,
},


  whiteBackgroundPatch: {
    backgroundColor: COLORS.white,
    position: 'absolute',
    top: -hp(0.07),
    height: hp(6.8),
    width: wp(21.3),
    left: -wp(1.8),
  },
  menuButton: {
    backgroundColor: COLORS.black,
    borderRadius: wp(10),
    padding: wp(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
