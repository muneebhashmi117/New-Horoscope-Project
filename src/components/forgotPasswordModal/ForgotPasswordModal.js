// src/components/ForgotPasswordModal.js
import React, {useState} from 'react';
import {Modal, View, Text, Pressable, Alert, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Inputfields from '../inputfields';
import { COLORS } from '../../enums/StyleGuide';

const ForgotPasswordModal = ({visible, onClose}) => {
  const [email, setEmail] = useState('');

  const handleResetPassword = async () => {
    if (!email) {
      Alert.alert('Enter a valid email address');
      return;
    }
    try {
      await auth().sendPasswordResetEmail(email);
      Alert.alert('Password reset email sent!');
      onClose();
    } catch (err) {
      Alert.alert('Error', err.message);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Reset Password</Text>

          <Inputfields
            text={'Enter your email'}
            value={email}
            onChangeText={setEmail}
          />

          <Pressable style={styles.resetBtn} onPress={handleResetPassword}>
            <Text style={styles.resetBtnText}>Send Reset Email</Text>
          </Pressable>

          <Pressable style={styles.closeBtn} onPress={onClose}>
            <Text style={styles.closeBtnText}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default ForgotPasswordModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    backgroundColor: COLORS.white,
    padding: wp(5),
    borderRadius: wp(3),
    width: '80%',
  },
  title: {
    fontSize: hp(2.5),
    fontWeight: 'bold',
    marginBottom: hp(2),
  },
  resetBtn: {
    backgroundColor: COLORS.black,
    paddingVertical: hp(1),
    borderRadius: wp(2),
    marginTop: hp(2),
    alignItems: 'center',
  },
  resetBtnText: {
    color: COLORS.white,
    fontSize: hp(2),
  },
  closeBtn: {
    marginTop: hp(2),
  },
  closeBtnText: {
    color: COLORS.red,
    textAlign: 'center',
    fontSize: hp(1.8),
  },
});
