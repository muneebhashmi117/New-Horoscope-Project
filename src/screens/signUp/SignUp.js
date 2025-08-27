/* eslint-disable no-unused-vars */

import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, TEXT_STYLE} from '../../enums/StyleGuide';
import {SCREEN} from '../../enums/AppEnums';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LoginBtns from '../../components/loginBtns/LoginBtns';
import Inputfields from '../../components/inputfields/InputFields';
import {SignupWithEmailAndPassword} from '../../services/FireBaseServices';

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    const {user, error} = await SignupWithEmailAndPassword(email, password);
    if (error) {
      Alert.alert('Signup Failed', error);
    } else {
      Alert.alert('User Created Successfully');
      navigation.navigate(SCREEN.BOTTOM);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.signUptext}>Sign up</Text>
          <Text style={styles.createacctext}>Create your account</Text>

          <Inputfields text={'Name'} value={name} onChangeText={setName} />
          <Inputfields text={'Email'} value={email} onChangeText={setEmail} />
          <Inputfields
            text={'Password'}
            value={password}
            onChangeText={setPassword}
          />
          <Inputfields
            text={'Confirm Password'}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <Pressable style={styles.signupbtn} onPress={handleSignup} >
            <Text style={styles.btnTextWhite}>Signup</Text>
          </Pressable>

          <Pressable onPress={() => navigation.goBack()}>
            <Text style={styles.linkText}>Have an account? Login</Text>
          </Pressable>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: COLORS.white,
  },
  container: {
    margin: 25,
    marginTop: hp('12%'),
    backgroundColor: COLORS.white,
  },
  signUptext: {
    ...TEXT_STYLE.bigTextBold,
    fontSize: hp('4%'),
    fontFamily: 'Poppins-ExtraBold',
  },
  createacctext: {
    ...TEXT_STYLE.bigTextMedium,
    marginBottom: hp('2%'),
  },
  signupbtn: {
    backgroundColor: COLORS.black,
    paddingVertical: hp('0.5%'),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('2%'),
    alignSelf: 'center',
    width: '100%',
    height: hp('6%'),
  },
  btnTextWhite: {
    ...TEXT_STYLE.bigTextMedium,
    fontSize: hp('2.2%'),
    color: COLORS.white,
  },
  linkText: {
    textAlign: 'center',
    fontSize: hp(1.8),
    marginTop: hp('3%'),
    fontFamily: 'Poppins-Regular',
  },
});
