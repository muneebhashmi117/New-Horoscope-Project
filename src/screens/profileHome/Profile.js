import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../enums/StyleGuide';
import {logoutUser} from '../../services/FireBaseServices';
import {SCREEN} from '../../enums';

const Profile = ({navigation}) => {
  const handleLogout = async () => {
    const {success, error} = await logoutUser();
    if (success) {
      Alert.alert('Logged out successfully');
      navigation.navigate(SCREEN.LOGIN_SCREEN); // Ya jis screen pe bhejna ho
    } else {
      Alert.alert('Logout Failed', error);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogout}>
        <View style={styles.card}>
          <Text style={styles.title}>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: wp(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: wp(4),
    padding: wp(6),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: wp(6),
    fontWeight: 'bold',
    color: '#333',
    marginBottom: hp(1),
    textAlign: 'center',
  },
  subtitle: {
    fontSize: wp(4),
    color: '#666',
    textAlign: 'center',
  },
});
