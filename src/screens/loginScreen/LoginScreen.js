/* eslint-disable no-unused-vars */
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Image,
  Alert,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {SVG} from '../../assets';
import {COLORS, TEXT_STYLE} from '../../enums/StyleGuide';
import {SCREEN} from '../../enums/AppEnums';
import {IMAGES} from '../../assets/images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LoginBtns from '../../components/loginBtns/LoginBtns';
import Inputfields from '../../components/inputfields/InputFields';
import {SigninWithEmailAndPassword} from '../../services/FireBaseServices';
import auth from '@react-native-firebase/auth';
import {ForgotPasswordModal} from '../../components';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modal, setModal] = useState(false);

  const handleSignin = async () => {
    if (!email || !password) {
      Alert.alert('Enter valid input field');
      return;
    }
    const {user, error} = await SigninWithEmailAndPassword(email, password);
    if (error) {
      Alert.alert('SignIn Failed', error);
    } else {
      Alert.alert('User loggedIn Successfully');
      navigation.navigate(SCREEN.BOTTOM);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.titleText}>Login</Text>
          <Text style={styles.subtitleText}>Create your account</Text>

          {/* Social Login Buttons */}
          <LoginBtns leftSvg={<SVG.google />} text={'Google'} />
          <LoginBtns leftSvg={<SVG.apple />} text={'Apple'} />

          {/* Input Fields */}
          <Inputfields text={'Email'} value={email} onChangeText={setEmail} />
          <Inputfields
            text={'Password'}
            value={password}
            onChangeText={setPassword}
          />

          {/* Forgot Password */}
          <Pressable onPress={() => setModal(true)}>
            <Text style={styles.forgotmsg}>Forgot Password?</Text>
          </Pressable>
          <ForgotPasswordModal
            visible={modal}
            onClose={() => setModal(false)}
          />

          {/* Login Button */}
          <Pressable style={styles.loginbtn} onPress={handleSignin}>
            <Text style={styles.btnTextWhite}>Signin</Text>
          </Pressable>

          {/* Signup Navigation */}
          <Pressable onPress={() => navigation.navigate(SCREEN.SIGNUP_SCREEN)}>
            <Text style={styles.linkText}>Don't have an account? Sign up</Text>
          </Pressable>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: COLORS.white,
  },
  container: {
    margin: 25,
    marginTop: hp('15%'),
    backgroundColor: COLORS.white,
  },
  titleText: {
    ...TEXT_STYLE.bigTextBold,
    fontSize: hp('4%'),
    fontFamily: 'Poppins-ExtraBold',
  },
  subtitleText: {
    ...TEXT_STYLE.bigTextMedium,
    marginBottom: hp('2%'),
  },
  forgotmsg: {
    ...TEXT_STYLE.bigTextMedium,
    textAlign: 'right',
    fontSize: wp('3.7%'),
  },
  loginbtn: {
    backgroundColor: COLORS.black,
    paddingVertical: hp('0.5%'),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(2),
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
